import React, {useState, useEffect} from 'react';
import { useQuery } from 'react-query';
import { useParams, Link } from 'react-router-dom';
import '../styles/ProductDetails.css';

//Single product page
const ProductDetails = ({cartId}) => {
  //Use useState hook to store button text state
  const [clickCount, setClickCount] = useState(0);
  const [buttonText, setButtonText] = useState('Add to cart');
  
  //Add to card function using cart and product id
  //when clicked, the button text increments by 1 
  const addToCart = () => {
    fetch(`http://localhost:5000/carts/${cartId}/add/${id}`, { method: 'PUT' });
    setClickCount((prevCount) => prevCount + 1);
    setButtonText(`${clickCount + 1}`);
  };

  useEffect(() => {
    if (clickCount > 0) {
      setButtonText(`${clickCount}`);
    }
  }, [clickCount]);
  
  const { id } = useParams(); //Product id
  const {data, isLoading, error} = useQuery(`fetchProduct: ${id}`,() => 
  fetch(`http://localhost:5000/products/${id}`).then(res => res.json()) ) 
  
  if (isLoading) return 'Loading...'
  if (error) return `an error ${error}`
  const { name, price, description, image } = data;

  return (
    <div className="product-detail">
      <img src={`/productImages/${image}`} alt={name} />
      <div className="product-info">
        <p><b>{name}</b></p>
        <p>{price}€</p>
      </div>
      <div className="product-description">{description}</div>
      <button className='add-to-cart-btn' onClick={() => addToCart()}>{buttonText}</button>
      <button className='back'><Link to="/products">Back</Link></button>
    </div>
  );
};

export default ProductDetails;

