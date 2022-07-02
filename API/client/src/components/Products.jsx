import styled from 'styled-components';
import Product from './Product.jsx';
import { useState, useEffect } from 'react';
import axios from "axios";
import { BASE_URL } from '../requestMethods.js';

const Container = styled.div`   
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
`;

const Products = ({ cat, filters, sort }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat ? `${BASE_URL}/products?category=${cat}`
                        : `${BASE_URL}/products`
                )
                setProducts(res.data);
            } catch(err) {}
        };
        getProducts();
    }, [cat]);
    
    useEffect(() => {
        cat && setFilteredProducts(
            products.filter((item) =>
                Object.entries(filters).every(([key, value]) => 
                    item[key].includes(value)
                )
            )
        );
    }, [cat, filters, products]);

    useEffect(() => {
        if(sort === "newest"){
            setFilteredProducts(prev => 
                [...prev].sort((a,b) => b.createdAt - a.createdAt)
            );
        } else if(sort === "inc"){
            setFilteredProducts(prev => 
                [...prev].sort((a,b) => a.price - b.price)
            );
        } else {
            setFilteredProducts(prev => 
                [...prev].sort((a,b) => b.price - a.price)
            );
        }
    }, [sort]);

    return (
        <Container>
            { cat
                ? filteredProducts.map((item) => <Product key={item._id} item={item} />)
                : products
                    .slice(0, 8)
                    .map((item) => <Product key={item._id} item={item} />)
            }
        </Container>
    )
}

export default Products;
