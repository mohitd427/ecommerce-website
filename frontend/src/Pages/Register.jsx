import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  console.log(user)
  
  const registerSubmit = (e) => {
  
  };
  return (
    <Container>
      <Wrapper>
        <Title>REGISTER HERE</Title>
        <Form>
          <Input
            name="name"
            required
            placeholder="Name"
            value={user.name}
            onChange={onChangeInput}
          />
          <Input
            placeholder="Username"
            name="name"
            required
            placeholder="Name"
            value={user.name}
            onChange={onChangeInput}
          />
          <Input
            placeholder="Email"
            name="name"
            required
            placeholder="Name"
            value={user.name}
            onChange={onChangeInput}
          />
          <Input
            placeholder="Password"
            name="name"
            required
            placeholder="Name"
            value={user.name}
            onChange={onChangeInput}
          />
          <Input
            placeholder="Confirm password"
            name="name"
            required
            placeholder="Name"
            value={user.name}
            onChange={onChangeInput}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={"()=>registerSubmit()"}>CREATE ACCOUNT</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ height: "80vh" })}
`;

const Wrapper = styled.div`
  width: 40%;

  padding: 20px;
  ${mobile({ width: "75%",height:"100%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border-radius: 7px;
  border: none;
  background: lightgray;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: crimson;
  color: white;
  cursor: pointer;
`;

export default Register;
// https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
