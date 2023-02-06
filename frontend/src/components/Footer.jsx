import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,  
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
import logo from "../utils/logo1.png"



const Footer = () => {
  return (
    <>
      <Container>
        <Left>
          <Image src={logo} />
          <Desc>
            Zenith Zone is popular E-commerce corner to buy any thing which fall
            under this Earth. We are devoted to our customers in order to
            provide them goods from all over the world.
          </Desc>
          
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Left>
        <hr />

        <Center>
          <Title>Redirects</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>

        <hr />

        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} /> Flat-501 Dadar Haveli
            POST-Andheri PIN-227003
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +91 8000009993
          </ContactItem>

          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} />{" "}
            zenithzone143@trendings.com
          </ContactItem>
          <hr />

          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Right>
      </Container>
      <Text>Trademark @ ZenithZone Private Limited</Text>
    </>
  );
};

const Container = styled.div`
  display: flex;
  height:400px;
  color:#fff;
  background-color:black;
  ${mobile({ flexDirection: "column" ,color:"black", backgroundColor:'#fff'})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
 
`;

const Image = styled.img`
  width:100px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
margin:30px 0;
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
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
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  margin:30px 0;
`;

const Payment = styled.img`
  margin: 30px 0;
  width: 50%;
`;

const Text = styled.p`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color:gray;

`;

export default Footer;
