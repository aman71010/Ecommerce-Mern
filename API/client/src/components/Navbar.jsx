import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import { tablet, mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { useHistory } from 'react-router';
import jwt_decode from 'jwt-decode';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
    color: black;
`;

const DropdownContent = styled.div`
    display: none;
    padding: 10px;
    position: absolute;
    background-color: white;
    z-index: 1;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    left: -20px;
    cursor: pointer;
`;

const Dropdown = styled.div`
    position: relative;
    &:hover ${DropdownContent} {
        display: flex;
        align-items: center;
    }
`;

const Logout = styled.span``;

const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

    const quantity = useSelector(state => state.cart.quantity);

    const history = useHistory();

    const logout = () => {
        localStorage.clear();
        setUser(null);
        history.push("/login");
    };

    useEffect( () => {
        const token = user?.accessToken;
        if(token){
            const decodedToken = jwt_decode(token);
            if(decodedToken.exp*1000 < new Date().getTime()) logout();
        }
        
    });
    
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
                    {user ? ( 
                        <Dropdown>
                            <Avatar 
                                style={{cursor: "pointer"}}
                                children={`${user.name.split(' ')[0][0]}${user.name.split(' ')[1][0]}`}
                            />
                            <DropdownContent onClick={()=>{logout()}}> 
                                <ExitToAppIcon style={{paddingRight: "5px"}}/>
                                <Logout>Logout</Logout>                             
                            </DropdownContent>                    
                        </Dropdown>
                    ): (
                        <>
                            <Link style={{textDecoration: "none"}} to="/register">
                            <MenuItem>REGISTER</MenuItem>
                            </Link>
                            <Link style={{textDecoration: "none"}} to="/login">
                                <MenuItem>SIGN IN</MenuItem>
                            </Link>
                        </>  
                    )}
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="secondary">
                                <ShoppingCartOutlinedIcon />    
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;