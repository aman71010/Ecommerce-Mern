import styled from 'styled-components';
import { tablet, mobile } from '../responsive';
import { useState, useEffect } from 'react';
import { publicRequest } from '../requestMethods.js';
import { Link, useHistory } from 'react-router-dom';

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

const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
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

const Con = styled.span`
    font-size: 12px;
    margin: 5px 0;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {

    const history = useHistory();
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const inputHandler = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect( () => {

        const login = async () => {
            if(Object.keys(formErrors).length === 0 && isSubmit === true){
                try{
                    const {data} = await publicRequest.post("/auth/login", formValues);
                    if(data) {
                        localStorage.setItem("profile", JSON.stringify(data));
                        setTimeout( () => {
                            history.push("/");
                        }, 500); 
                    }
                } catch(err){
                    setFormErrors({password: "wrong username or password"});
                }
            }
        };
        login();
    }, [formErrors, isSubmit]);

    const validate = (values) => {
        const errors = {};
        if(!values.username){
            errors.username = "Username is required";
        }
        if(!values.password){
            errors.password = "Password is required";
        }
        return errors;
    };

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form onSubmit={handleSubmit}>
                    <Input 
                        placeholder="username" 
                        name="username" 
                        value={formValues.username} 
                        onChange={inputHandler}
                    />
                    <ErrorMessage>{formErrors.username}</ErrorMessage>
                    <Input 
                        type="password"
                        placeholder="password" 
                        name="password" 
                        value={formValues.password} 
                        onChange={inputHandler}
                    />
                    <ErrorMessage>{formErrors.password}</ErrorMessage>
                    <Button type="submit">LOGIN</Button>
                    <Link style={{textDecoration: "none"}} to="#"><Con>DO NOT YOU REMEMBER THE PASSWORD?</Con></Link>
                    <Link style={{textDecoration: "none"}} to="/register"><Con>CREATE A NEW ACCOUNT</Con></Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login;
