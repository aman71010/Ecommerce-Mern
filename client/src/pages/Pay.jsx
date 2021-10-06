import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
// import useHistory from "react-router";
import axios from "axios";

const KEY = "pk_test_51JgUZLSJFv2mTZc1JYobQQT8vjYpCaA2r5XHErxp405luuOPCimlIfOiKtUE1McrWjn5VyuZNt9d3e6xH6UDx9EM00OFhfdPIL";

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
`;

const Button = styled.button`
    padding: 10px;
    margin: 20px;
    background-color: #1c54b2;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        console.log(token);
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try{
                console.log(stripeToken.id);
                const res = await axios.post("http://localhost:8080/api/checkout/payment", {
                        tokenId: stripeToken.id,
                        amount: 2500
                    });
                console.log("part2");
                console.log(res.data);
            } catch(err){
                console.log(err);
            }
        };

        stripeToken && makeRequest();

    }, [stripeToken]);

    return (
        <Container>
            <Title>Welcome to Payment Gateway</Title>
            <StripeCheckout 
                name="ProShop"
                description="Total amount is rs 25"
                amount={2500}
                shippingAddress
                billingAddress
                token={onToken}
                stripeKey={KEY}
            >
                <Button>Pay with card</Button>
            </StripeCheckout>
        </Container>
    )
}

export default Pay;
