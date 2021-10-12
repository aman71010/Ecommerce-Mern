import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { Add, Remove } from '@material-ui/icons';
import { tablet, mobile } from '../responsive';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { publicRequest } from '../requestMethods.js';
import { addProducts } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Container = styled.div``;

const Wrapper = styled.div`
    display: flex;
    margin: 40px;
    height: 80vh;
    ${tablet({margin: "20px"})};
    ${mobile({flexDirection: "column", height: "130vh"})};
`;

const ImgContainer = styled.div`
    width: 0;
    flex: 1;
    display: flex;
    justify-content: center;
    ${mobile({width: "100%", height: "50%"})};
`;

const Image = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    width: 0;
    flex: 1;
    padding: 0 50px;
    ${tablet({padding: "0 20px"})};
    ${mobile({
        width: "100%", 
        height: "50%",
        padding: "20px 0",
    })};
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
    width: 70%;
    ${tablet({margin: "15px 0", width: "100%"})};
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
    width: 70%;
    display: flex;
    justify-content: space-between;
    ${tablet({width: "100%"})};
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

    const location = useLocation();
    const dispatch = useDispatch();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const getProduct = async () => {
            try{
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch {}
        };
        getProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if(type === "dec"){
            quantity>1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleClick = () => {
        dispatch(
            addProducts({...product, color, size, quantity})
        );
    };
    
    


    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            { product.color?.map((c) => 
                                (<FilterColor color={c} key={c} onClick={() => setColor(c)}/>)) }
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
                            { product.size?.map((s) => 
                                (<FilterSizeOption key={s}>{s}</FilterSizeOption>)) }
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")}/>
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product;
