import styled from 'styled-components';
import { categories } from '../data.js';
import CategoryItem from './CategoryItem.jsx';

const Container = styled.div`
    display: flex;
    padding: 5px;
`;

const Categories = () => {
    return (
        <Container>
           { categories.map(item => 
           <CategoryItem key={item.id} item={item} />
           )} 
        </Container>
    )
}

export default Categories;
