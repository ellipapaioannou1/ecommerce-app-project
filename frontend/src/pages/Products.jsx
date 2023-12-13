import React from 'react';
import Product from '../components/Product.jsx';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import '../styles/Products.css'

//Products listing page
const Products = () => {
    const { data: products, isLoading, error } = useQuery('productsData', () =>
    fetch('http://localhost:5000/products').then(res => res.json())
    );

    if (isLoading) return 'Loading...'
    if (error) return `an error ${error}`

    return (
            <div className='products'>
                {products.map((product) => (   
                    <Link className='link' key={product._id} to={`/products/${product._id}`}>
                        <Product data={product} />
                    </Link>
                 ))
                };
            </div>
    );
};

export default Products;
