import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Newsletter from '../components/Newsletter.jsx';
import Announcement from '../components/Announcement.jsx';
import Products from '../components/Products.jsx';
import styled from 'styled-components';
import { tablet } from '../responsive';
import { useLocation } from 'react-router';
import { useState } from 'react';


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
    ${tablet({display: "flex", flexDirection: "column"})};
`;

const FilterText = styled.span`
    margin-right: 20px;
    font-size: 20px;
    font-weight: 600px;
    ${tablet({marginRight: "0"})};
    

`;

const Select = styled.select`
    padding: 8px;
    margin-right: 20px;
    cursor: pointer;
    outline: none;
    ${tablet({margin: "10px 0"})};

`;

const Option = styled.option``;


const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    
    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name] : value,
        })
    };

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled >Color</Option>
                        <Option>Black</Option>
                        <Option>White</Option>
                        <Option>Yellow</Option>
                        <Option>Blue</Option>
                        <Option>Red</Option>
                        <Option>Purple</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled >Size</Option>
                        <Option>XL</Option>
                        <Option>L</Option>
                        <Option>M</Option>
                        <Option>S</Option>
                        <Option>XS</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="inc">Price(inc)</Option>
                        <Option value="dec">Price(dec)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList;
