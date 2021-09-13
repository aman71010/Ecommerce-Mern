import styled from 'styled-components';

const Container = styled.div`
    
`;

const Info = styled.div`

`;

const Image = styled.img`

`;

const Title = styled.h1`

`;

const Button = styled.button`

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
