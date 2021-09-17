import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Newsletter from '../components/Newsletter.jsx';
import Announcement from '../components/Announcement.jsx';
import Products from '../components/Products.jsx';
import styled from 'styled-components';


const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    margin-right: 20px;
    font-size: 20px;
    font-weight: 600px;
`;

const Select = styled.select`
    padding: 8px;
    margin-right: 20px;
    cursor: pointer;
    outline: none;
`;

const Option = styled.option``;


const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>

                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected >Color</Option>
                        <Option>Black</Option>
                        <Option>White</Option>
                        <Option>Yellow</Option>
                        <Option>Blue</Option>
                        <Option>Red</Option>
                        <Option>Purple</Option>
                    </Select>
                    <Select>
                        <Option disabled selected >Size</Option>
                        <Option>XL</Option>
                        <Option>L</Option>
                        <Option>M</Option>
                        <Option>S</Option>
                        <Option>XS</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected >Newest</Option>
                        <Option>Price (inc)</Option>
                        <Option>Price (dec)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList;
