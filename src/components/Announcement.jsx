import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    font-size: 14px;
    background-color: #1c54b2;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
`;

const Announcement = () => {
    return (
        <Container>Super Deal! Free Shiping on Orders above Rs. 499</Container>
    )
}

export default Announcement;
