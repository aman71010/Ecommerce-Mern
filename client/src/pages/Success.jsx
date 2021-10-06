import styled from "styled-components";


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

const Success = () => {
    return (
        <Container>
            <Title>Success</Title>
            <Button>Go to Home Page</Button>
        </Container>
    )
}

export default Success;
