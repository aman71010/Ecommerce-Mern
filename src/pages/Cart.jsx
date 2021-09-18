import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
`;

const Top = styled.div`
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TopButton = styled.button`
    padding: 10px;
    background-color: ${ (props) => props.type === "filled" ? "#1c54b2" : "transparent" };
    border: ${( props) => props.type === "filled" ? "none" : "2px solid #1c54b2" };
    color: ${ (props) => props.type === "filled" && "white" };
    font-weight: 600;
    cursor: pointer;
`;

const TopTexts = styled.div`
    
`;

const TopText = styled.span`
    text-decoration: underline;
    margin: 0 10px;
    cursor: pointer;
    font-weight: 500;
`;

const Bottom = styled.div`
    display: flex;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.div``;

const ProductId = styled.div``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;

const ProductSize = styled.div``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const Price = styled.div`
    font-size: 26px;
    font-weight: 200;
`;

const Hr = styled.hr`
    border: none;
    background: #eee;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    padding: 20px;
    border: 1px solid lightgrey;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 24px 0;
    font-size: ${ (props) => props.type === "total" && "26px"};
    font-weight: ${ (props) => props.type === "total" && "500" };
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #1c54b2;
    color: white;
    border: none;
    font-weight: 600;
    cursor: pointer;
`;

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>ID:</b> 93813718293</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <Price>₹ 3999</Price>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                            <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>ID:</b> 93813718293</ProductId>
                                    <ProductColor color="grey" />
                                    <ProductSize><b>Size:</b> 37.5</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <Price>₹ 1799</Price>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>₹ 9,797</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Charge</SummaryItemText>
                            <SummaryItemPrice>₹ 500</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>₹ -500</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>₹ 9,797</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart;
