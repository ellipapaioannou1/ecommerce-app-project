import React, { useCallback } from 'react';
import { useQuery } from 'react-query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import '../styles/Cart.css';
import swal from 'sweetalert';

//Cart page
const Cart = ({ cartId }) => {

  const { data, isLoading, error, refetch } = useQuery('cartData', () => 
   fetch(`http://localhost:5000/carts/${cartId}`).then((res) => res.json()),
   //Execute query only if cart id exists
   { enabled: cartId != null });
  
  
   //Function using callback hook to memorize it
  const onRemoveItem = useCallback(async (itemId) => {
    //Send a delete request to remove an item
    await fetch(`http://localhost:5000/carts/${cartId}/remove/${itemId}`, {method: 'DELETE'});
   //Refetch data after delete
    refetch();
  }, [cartId, refetch]);

  if (isLoading) return 'Loading...';
  if (error) return `An error ${error}`;
  if (!data) return null;
  
  //Calculate the total amount of cart items
  const total = data.products.reduce((acc, item) => acc + item.price, 0);
  
  //Success alert on completed order
  const alertOrder = () => { swal("Congrats!", " Your order is confirmed!", "success");
  };

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