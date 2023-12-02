import React from "react";
import '../styles/Products.css'


const Product = (props) => {
    const { name, price, description, image } = props.data;
    

    return (
        <div className="product">
            <img src={`/productImages/${image}`} alt={name} />
            <div className="info">
                <p><b>{name}</b></p>
                <p>{price}€</p>
            </div>
            <div className="description">{description}</div>
        </div>
    );
}

export default Product;