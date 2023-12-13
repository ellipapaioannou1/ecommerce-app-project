import React from "react";
import '../styles/Products.css'

//Product card component
const Product = (props) => {
    const { id,name, price, image } = props.data;
    return (
        <div className="product">
            <img src={`/productImages/${image}`} alt={name} />
            <div className="info">
                <p><b>{name}</b></p>
                <p>{price}€</p>
            </div>
            <button className="view-btn" onClick={`/products/${id}`}>View Product</button>
        </div>
    );
};

export default Product;



