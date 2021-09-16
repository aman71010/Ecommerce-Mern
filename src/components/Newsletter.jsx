import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fcf1ed;
    height: 60vh;
`;

const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
`;

const Description = styled.p`
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 300px;
`;

const InputControl = styled.div`
    display: flex;
    width: 50%;
    border: 0.5px solid lightgrey;
    background-color: white;
    height: 40px;
    justify-content: space-between;
`;

const Input = styled.input`
    flex: 8;
    padding-left: 20px;
    outline: none;
    border: none;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #1c54b2;
    color: white;
    cursor: pointer;
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products</Description>
            <InputControl>
                <Input placeholder="Your Email"></Input>
                <Button>
                    <SendIcon />
                </Button>
            </InputControl>
        </Container>
    )
}

export default Newsletter;
