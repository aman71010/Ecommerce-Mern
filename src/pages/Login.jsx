import styled from 'styled-components';
import { tablet, mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)
        ),
        url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") 
        center;
    background-size: cover;   
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    background-color: white;
    padding: 20px;
    ${tablet({width: "40%"})};
    ${mobile({width: "60%"})};
`;

const Title = styled.h1`
    font-size: 26px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0 ;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    padding: 10px 15px;
    border: none;
    background-color: #1c54b2;
    color: white;
    cursor: pointer;
    margin: 5px 0;
`;

const Link = styled.a`
    font-size: 12px;
    margin: 5px 0;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login;
