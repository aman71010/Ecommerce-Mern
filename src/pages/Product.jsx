import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div``;

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    height: 80vh;
`;

const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    padding: 20px 0;
`;

const Price = styled.span`
    font-size: 30px;
    font-weight: 100;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    width: 50%;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 10px;
    background-color: ${props => props.color};
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    outline: none;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid #1c54b2;
    border-radius: 10px;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    background-color: white;
    border: 2px solid #1c54b2;
    font-weight: 500;
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #f8f4f4;
    }
`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu felis nibh. Maecenas vitae turpis in libero ornare finibus.
                        Mauris ac elit iaculis ante volutpat dictum. Integer metus mauris, euismod nec pulvinar vel, posuere non justo. Praesent 
                        lacinia porta diam non lobortis. Aliquam facilisis imperdiet elit et posuere. 
                    </Desc>
                    <Price>Rs. 2999</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product;
