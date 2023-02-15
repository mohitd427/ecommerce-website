import styled from "styled-components";
import {Link} from "react-router-dom"
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/apiCalls";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN HERE</Title>
        <Form>
          <Input type='email'  placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
          <Input type='password'  placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          <Button onClick={handleLogin} disabled={isFetching}>LOG IN</Button>
          <Text>FORGOT PASSWORD?</Text>
          <Text>
            <Link to="/register" style={{ textDecoration: "none" }}>
              CREATE A NEW ACCOUNT
            </Link>
          </Text>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 35%;
  padding: 20px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  border-radius: 7px;
  border: none;
  background: lightgray;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: crimson;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color:blue;
    cursor:not-allowed
  }
`;

const Text = styled.p`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`;

// https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
