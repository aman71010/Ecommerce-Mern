import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    height: 70vh;
    margin: 3px;
    position: relative;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const Title = styled.h1`
    font-size: 20px;
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    color: gray;
    background-color: white;
    font-weight: 600;
    cursor: pointer;
`;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}></Image>
            <Info>
                <Title>{item.title}</Title> 
                <Button>SHOW NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem;
