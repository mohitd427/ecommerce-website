import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import logo  from "../utils/logo.png"
import Announcement from "./AnnounceNav";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  margin-top:0;
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
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
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
  font-weight: bold;
  width:10%;
  height:100%;
  background-color:#fff;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
height:20px;
width:80px;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  border:1px solid red:
  backgorund-color:red;
`;

const Navbar = () => {
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
            <MenuItem>
              <Link to="/register" style={{ textDecoration: "none" }}>
                SIGN UP
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/login" style={{ textDecoration: "none" }}>
                LOG IN
              </Link>
            </MenuItem>
            <MenuItem>
              <Badge badgeContent={2} color="primary">
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <ShoppingCartOutlined />
                </Link>
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
