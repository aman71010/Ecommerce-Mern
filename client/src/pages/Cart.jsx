import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { tablet, mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { userRequest } from '../requestMethods';

const KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;   

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
    ${mobile({flexDirection: "column", alignItems: "flex-start"})};
`;

const TopButton = styled.button`
    padding: 10px;
    background-color: ${ (props) => props.type === "filled" ? "#1c54b2" : "transparent" };
    border: ${( props) => props.type === "filled" ? "none" : "2px solid #1c54b2" };
    color: ${ (props) => props.type === "filled" && "white" };
    font-weight: 600;
    cursor: pointer;
    ${mobile({width: "159px"})};
`;

const TopTexts = styled.div`
    ${mobile({padding: "20px 0"})};
`;

const TopText = styled.span`
    text-decoration: underline;
    margin: 0 10px;
    cursor: pointer;
    font-weight: 500;
    ${mobile({margin: "0 20px 0 0"})};
`;

const Bottom = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})};
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
`;

const ProductDetail = styled.div`
    flex: 3;
    display: flex;
    ${mobile({flexDirection: "column"})};
`;

const Image = styled.img`
    width: 200px;
    ${tablet({width: "150px"})};
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${tablet({padding: "10px"})};
    ${mobile({padding: "20px 0 10px 0"})};
`;

const ProductName = styled.div`
    ${mobile({marginBottom: "10px"})};
`;

const ProductId = styled.div`
    ${mobile({marginBottom: "10px"})};
`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    ${mobile({marginBottom: "10px"})};
`;

const ProductSize = styled.div`
    ${mobile({marginBottom: "10px"})};
`;

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
    padding: 16px;
    min-width: 250px;
    border: 1px solid lightgrey;
    ${tablet({flex: "2", padding: "10px", minWidth: "0"})};
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
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            const totalCartAmount = cart.total;
            try{
                const res = await userRequest.post("checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: totalCartAmount*100
                });
                history.push("/success", {
                    stripeData: res.data,
                    products: cart
                });
            } catch(err){
                console.log(err);
            }
        };

        stripeToken && makeRequest();

    }, [stripeToken, cart, history]);

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <Link to="/">
                        <TopButton>CONTINUE SHOPPING</TopButton>
                    </Link>
                    <TopTexts>
                        <TopText>Shopping Bag({cart.quantity})</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        { cart.products.map(product => (
                            <Product key={product._id}>
                                <ProductDetail>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName><b>Product:</b> {product.title}</ProductName>
                                        <ProductId><b>ID:</b> {product._id}</ProductId>
                                        <ProductColor color={product.color} />
                                        <ProductSize><b>Size:</b>{product.size}</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add />
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Remove />
                                    </ProductAmountContainer>
                                    <Price>$ {product.price * product.quantity}</Price>
                                </PriceDetail>
                            </Product>
                            )
                        )}
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Charge</SummaryItemText>
                            <SummaryItemPrice>$ 50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout 
                            name="ProShop"
                            description = {`Total amount is ${cart.total}`}
                            amount={cart.total * 100}
                            shippingAddress
                            billingAddress
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <Button>CHECKOUT NOW</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart;
