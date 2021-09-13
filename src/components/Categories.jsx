import styled from 'styled-components';
import { categories } from '../data.js';
import CategoryItem from './CategoryItem.jsx';

const Container = styled.div`
    display: flex;
    
`;

const Categories = () => {
    return (
        <Container>
           { categories.map(item => 
           <CategoryItem item={item} />
           )} 
        </Container>
    )
}

export default Categories;
