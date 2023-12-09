import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetails.css';

const ProductDetails = ({cartId}) => {
  const { id } = useParams(); //product id
  const {data, isLoading, error} = useQuery(`fetchProduct: ${id}`,() => 
  fetch(`http://localhost:5000/products/${id}`).then(res => res.json()) ) 
  if (isLoading) return 'Loading...'
  if (error) return `an error ${error}`
  const { name, price, description, image } = data;

  
  return (
    
    <div className="product">
      <img src={`/productImages/${image}`} alt={name} />
      <div className="info">
        <p><b>{name}</b></p>
        <p>{price}€</p>
      </div>
      <div className="description">{description}</div>
      <button onClick={() => fetch(`http://localhost:5000/carts/${cartId}/add/${id}`, {method: 'PUT'})  }>Add to cart</button>
    </div>
  );
}

export default ProductDetails;
