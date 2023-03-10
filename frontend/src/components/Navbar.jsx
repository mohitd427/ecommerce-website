import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import logo  from "../utils/logo.png"
import Announcement from "./AnnounceNav";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  margin-top:0;
  ${mobile({height:"50px" })}
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
  font-weight: bold;
  width: 10%;
  height: 100%;
  background-color: #fff;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`

  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity)
  const user = useSelector(state=>state.user.currentUser.user)
  console.log(user.username, 'in navbar')
  
  const handleLogout = () => {
    
  }
  return (
    <>
      {/* //Announcement */}
      <Announcement />

      <Container>
        <Wrapper>
          <Center>
            <Logo src={logo} alt="" />
          </Center>
          <Left>
            <Language>ENJOY SHOPPING</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>

          <Right>
            <MenuItem>{
              user ? user.username : <Link to="/register" style={{ textDecoration: "none" }}>
                SIGN UP
              </Link>
            }
              
            </MenuItem>
            <MenuItem>
             { user ? <button onClick={handleLogout}>LOG OUT</button> : <Link to="/login" style={{ textDecoration: "none" }}>
                LOG IN
              </Link>
              }
            </MenuItem>
            <Link to="/cart" style={{ textDecoration: "none" }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
               
                  <ShoppingCartOutlined />
               
              </Badge>
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
