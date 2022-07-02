import styled from 'styled-components';
import { tablet2, mobile2 } from '../responsive';
import { useState, useEffect  } from 'react';
import { publicRequest } from '../requestMethods.js';
import { useHistory } from 'react-router';

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

const InputDiv = styled.div`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    ${mobile2({margin: "10px 0 0 0"})};
`;

const Input = styled.input`
    width: 90%;
    padding: 10px;
    ${mobile2({padding: "5px"})};
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 14px;
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

    const history = useHistory();
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

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

        const register = async () => {
            if(Object.keys(formErrors).length === 0 && isSubmit === true){
                try{
                    const res = await publicRequest.post("/auth/register", formValues);
                    if(res){
                        history.push("/login");
                    }
                } catch(err){
                    console.log(err);
                }
            }
        };
        register();
    });

    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        if(!values.firstName){
            errors.firstName = "First Name is required";
        }
        if(!values.lastName){
            errors.lastName = "Last Name is required";
        }
        if(!values.username){
            errors.username = "Username is required";
        } else if(values.username.length < 5) {
            errors.username = "Username must be more than 4 characters";
        }
        if(!values.email){
            errors.email = "Email is required";
        } else if(!regex.test(values.email)){
            errors.email = "Email is not valid";
        }
        if(!values.password){
            errors.password = "Password is required";
        }else if(values.password.length < 4){
            errors.password = "Password must be more than 3 characters";
        }else if(values.password.length > 10){
            errors.password = "Password must be not more than 10 characters";
        }
        if(!values.confirmPassword){
            errors.confirmPassword = "Confirm Password is required";
        }else if(values.password !== values.confirmPassword){
            errors.confirmPassword = "Both the passwords must be same";
        }

        return errors;
    };

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleSubmit}>
                    <InputDiv>
                        <Input 
                            placeholder="first name" 
                            name="firstName" 
                            value={formValues.firstName} 
                            onChange={inputHandler}
                        />
                        <ErrorMessage>{formErrors.firstName}</ErrorMessage>
                    </InputDiv>
                    <InputDiv>
                        <Input 
                            placeholder="last name" 
                            name="lastName" 
                            value={formValues.lastName} 
                            onChange={inputHandler}  
                        />
                        <ErrorMessage>{formErrors.lastName}</ErrorMessage>
                    </InputDiv>   
                    <InputDiv>
                        <Input 
                            placeholder="username" 
                            name="username" 
                            value={formValues.username} 
                            onChange={inputHandler}
                        />
                        <ErrorMessage>{formErrors.username}</ErrorMessage>
                    </InputDiv>
                    <InputDiv>
                        <Input 
                            placeholder="email"
                            name="email" 
                            value={formValues.email}
                            onChange={inputHandler}
                        />
                        <ErrorMessage>{formErrors.email}</ErrorMessage>
                    </InputDiv>
                    <InputDiv>
                        <Input 
                            type="password"
                            placeholder="password" 
                            name="password" 
                            value={formValues.password} 
                            onChange={inputHandler}
                        />
                        <ErrorMessage>{formErrors.password}</ErrorMessage>
                    </InputDiv>
                    <InputDiv>
                        <Input 
                            type="password"
                            placeholder="confirm password" 
                            name="confirmPassword" 
                            value={formValues.confirmPassword} 
                            onChange={inputHandler}                      
                        />
                        <ErrorMessage>{formErrors.confirmPassword}</ErrorMessage>
                    </InputDiv> 
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button type="submit">CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register;
