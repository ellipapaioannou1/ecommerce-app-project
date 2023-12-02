import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const {data, isLoading, error} = useQuery(`fetchProduct: ${id}`,() => 
  fetch(`http://localhost:5000/products/${id}`).then(res => res.json()) ) 
  if (isLoading) return 'Loading...'
  if (error) return `an error ${error}`
  console.log(data)
  const { name, price, description, image } = data;
  return (
    <div className="product">
      <img src={image} alt={name} />
      <div className="info">
        <p><b>{name}</b></p>
        <p>{price}€</p>
      </div>
      <div className="description">{description}</div>
    </div>
  );
}

export default ProductDetails;
