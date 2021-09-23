import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import { tablet, mobile } from '../responsive';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    display: flex;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    flex = 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    fontSize: 14px;
    cursor: pointer;
    margin-right: 25px;
    ${tablet({display: "none"})};
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;
    ${mobile({display: "none"})};
`;

const Input = styled.input`
    border: none;
    outline: none;
`;

const Center = styled.div`
    flex = 1;
    text-align: center;
    ${mobile({flex: "auto", textAlign: "left"})};
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex = 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    margin-left: 25px;
    font-size: 14px;
    cursor: pointer;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={{fontSize: "16px", color: "gray"}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>ProShop</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlinedIcon />    
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;