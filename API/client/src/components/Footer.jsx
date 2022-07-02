import { Facebook, Twitter, Instagram, MailOutline, Phone, Room } from '@material-ui/icons';
import styled from 'styled-components';
import { tablet, mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    
    ${tablet({flexWrap: "wrap-reverse"})};
    ${mobile({
        flexWrap: "none",
        flexDirection: "column"
    })};
`;

const Left = styled.div`
    flex: 1;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0;
    ${mobile({margin: "10px 0"})};
`;

const SocialIconContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 36px;
    height: 36px;
    margin-right: 20px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    min-width: 264px;
    ${tablet({order: "1"})};
    ${mobile({
        padding: "10px 20px 0 20px", 
        order: "-1"
    })};
`;

const Title = styled.h3`
    margin-bottom: 30px;
    ${mobile({marginBottom: "20px"})};
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    ${mobile({marginBottom: "10px"})};
`;

const Payment = styled.img`
    width: 50%;
    ${mobile({width: "60%"})};
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ProShop</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget magna id quam euismod
                    malesuada a sed velit. Quisque neque tellus, cursus dictum nec, cursus ac est. Nunc vel 
                </Desc>
                <SocialIconContainer>
                    <SocialIcon bg="e91e63">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon bg="2c387e">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon bg="35baf6">
                        <Twitter />
                    </SocialIcon>
                </SocialIconContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Card</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style = {{marginRight: "10px"}} />772 xyz Road, Bihar</ContactItem>
                <ContactItem><Phone style = {{marginRight: "10px"}} />+1234 56 78</ContactItem>
                <ContactItem><MailOutline style = {{marginRight: "10px"}} />amangupta71010@gmail.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer;
