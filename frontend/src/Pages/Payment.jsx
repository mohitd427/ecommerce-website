import React from "react";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import logo from "../utils/logo1.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";

    
    
const KEY =  "pk_test_51MZhA2SGRaR9CnAJ3Xy3Sgx62luzGXTNjWqIbRrrjWqAfqi34SXhN4MnBxa7XXP24r1gRUne4YCcrn1tBtAFCBfj009K4NnRS6";

const Payment = () => {
    const [stripeToken, setStripeToken] = useState(null)
    const navigate = useNavigate()
    
    
    const onToken = (token) => {
        // console.log(token)
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:8080/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount:2000                    
                })
                console.log(res.data)
                navigate("/checkout")
            } catch (err) {
                console.log(err);
            }
        }
stripeToken && makeRequest()
    },[stripeToken])
  
  return (
    <Container maxWidth="80vh">
      <StripeCheckout
        name="Zenith zone"
        image={logo}
        billingAddres
              shippingAddress
              locale="auto"
              description="Your total is $20"
              amount={2000}
              token={onToken}
              stripeKey={KEY}
      >
        <Button> PAY NOW</Button>
      </StripeCheckout>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  min-width: 160px;
  min-height: 70px;
  background-color: crimson;
  color: white;
  cursor: pointer;
`;

export default Payment;
