import styled from 'styled-components';
import { popularProducts } from '../data.js';
import Product from './Product.jsx';

const Container = styled.div`   
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
`;

const Products = () => {
    return (
        <Container>
            { popularProducts.map((item) =>
                <Product key={item.id} item={item} />
            )}
        </Container>
    )
}

export default Products;
