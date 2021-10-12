import styled from 'styled-components';
import { categories } from '../data.js';
import CategoryItem from './CategoryItem.jsx';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    padding: 5px;
    flex-wrap: wrap;
    ${mobile({flexDirection: "column"})};
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
