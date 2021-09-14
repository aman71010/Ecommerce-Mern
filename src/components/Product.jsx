import styled from 'styled-components';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';

const Info = styled.div`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease;
    z-index: 3;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    min-width: 280px;
    height: 350px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    height: 200px;
    width: 200px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
`;


const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    height: 40px;
    width: 40px;
    background-color: white;
    border-radius: 50%;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.2);
    }
`;

const Product = ({item}) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img}></Image>
            <Info>
                <Icon>
                    <SearchIcon />
                </Icon>
                <Icon>
                    <FavoriteBorderIcon />
                </Icon>
                <Icon>
                    <ShoppingCartOutlinedIcon />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product;
