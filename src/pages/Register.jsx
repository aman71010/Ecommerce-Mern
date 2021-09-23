import styled from 'styled-components';
import { tablet2, mobile2 } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5), 
        rgba(255,255,255,0.5)
        ),
        url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") 
            center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    background-color: white;
    padding: 20px;
    ${tablet2({width: "60%"})};
`;

const Title = styled.h1`
    font-size: 26px;
    font-weight: 300;
    ${mobile2({fontSize: "18px"})};
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    ${mobile2({flexWrap: "nowrap", flexDirection: "column"})};
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
    ${mobile2({margin: "10px 0 0 0", padding: "5px"})};
`;

const Agreement = styled.span`
    margin: 20px 0;
    font-size: 12px;
    ${mobile2({margin: "10px 0"})};
`;

const Button = styled.button`
    width: 50%;
    padding: 10px 15px;
    border: none;
    background-color: #1c54b2;
    color: white;
    cursor: pointer;
`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="first name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register;