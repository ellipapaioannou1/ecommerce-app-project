import React, { useCallback } from 'react';
import { useQuery } from 'react-query';
import '../styles/Cart.css';

const Cart = ({ cartId }) => {
  
  const { data, isLoading, error, refetch} = useQuery('cartData', () =>
    fetch(`http://localhost:5000/carts/${cartId}`).then((res) => res.json())
  , { enabled: cartId != null});
  const onRemoveItem = useCallback(async (itemId) => {
    await fetch(`http://localhost:5000/carts/${cartId}/remove/${itemId}`, {method: 'DELETE'});
    refetch();
  }, [cartId, refetch])

  if (isLoading) return 'Loading...';
  if (error) return `An error ${error}`;
  if (!data) return null;

  const total = data.products.reduce((acc, item) => acc + item.price, 0);

  console.log('Cart data:', data); 
  return (
    <div>
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
              <button onClick={() => onRemoveItem(item._id)}>Remove item</button>
            </li>
          ))}          
        </ul>
        
      )}
      <div>
        <p>Your Cart Total: ${total} </p>
        <button onClick={() => fetch(`http://localhost:5000/orders`, {method: 'POST'}) } >Complete Order</button>
      </div>
    </div>
  );
};

export default Cart;