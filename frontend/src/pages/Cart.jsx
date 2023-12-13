import React, { useCallback,useState  } from 'react';
import { useQuery } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import '../styles/Cart.css';
import swal from 'sweetalert';
import Confetti from 'react-dom-confetti';

const Cart = ({ cartId }) => {
  const [confetti, setConfetti] = useState(false);
  const { data, isLoading, error, refetch } = useQuery('cartData', () => 
   fetch(`http://localhost:5000/carts/${cartId}`).then((res) => res.json()),
   { enabled: cartId != null });

  const onRemoveItem = useCallback(async (itemId) => {
    await fetch(`http://localhost:5000/carts/${cartId}/remove/${itemId}`, {method: 'DELETE'});
    refetch();
  }, [cartId, refetch]);

  if (isLoading) return 'Loading...';
  if (error) return `An error ${error}`;
  if (!data) return null;
  
  //Calculate the total amount of cart's items
  const total = data.products.reduce((acc, item) => acc + item.price, 0);
  
  const alertOrder = () => {setConfetti(true); // Enable confetti
  setTimeout(() => setConfetti(false), 3000); swal("Congrats!", " Your order is confirmed!", "success");
  }
  return (
    <div className='page'>
      <div className='container'>
        <h2>Your Cart</h2>
        {data.products.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {data.products.map((item) => (
              <li key={item._id}>
                <img src={`/productImages/${item.image}`} />
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <button  onClick={() => onRemoveItem(item._id)}><FontAwesomeIcon icon={faTrashCan} /></button>
              </li>
            ))}    
          </ul>
        )}
        {data.products.length > 0 && (
          <div className='complete-order'>
             <Confetti active={confetti} config={{ spread: 180, startVelocity: 40, elementCount: 200 }} />
            <p className='cart-total'>Total: ${total} </p>
            <button
              className='complete-order-btn'
              onClick={() => {
                fetch(`http://localhost:5000/orders`, { method: 'POST' });
                alertOrder();
              }}
              disabled={data.products.length === 0}
            >
              Complete Order
            </button>
          </div>
        )}
      </div>
  </div>
  );
};

export default Cart;