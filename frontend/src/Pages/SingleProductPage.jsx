import { Add, Remove, TextDecrease } from "@mui/icons-material";
import { ButtonBase } from "@mui/material";
import { Card } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { publicReq } from "../requestMethod";
import { mobile } from "../responsive";
import StarIcon from "@mui/icons-material/Star";
import { addProduct } from "../Redux/cartRedux";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";

const SingleProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  


  useEffect(() => {
    const getProducts = async () => {
      try {
        publicReq.get(`products/${id}`).then((res) => setProduct(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
     quantity>1 && setQuantity(quantity - 1);
    } else if (type === "inc") {
      setQuantity(quantity + 1);
    }
  }

  const handleAddToCart = () => {
    //update cart
    dispatch(addProduct({...product,quantity})) //color,size

  }


  return (
    <>
      <Navbar/>
      <Container>
        <Wrapper>
          <ImgContainer>
            <Image src={product.image} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.description}</Desc>
            <Price>{product.price}</Price>
            <button
              style={{
                backgroundColor: "white",
                color: "red",
                fontSize: "20px",
                borderRadius: "10px",
                border: "1px solid red",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                margin: "15px",
              }}
            >
              <StarIcon style={{ color: "red", paddingRight: "4px" }} />
              {product.rating}
            </button>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="red" />
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove onClick={() => handleQuantity("dec")} />
                <Amount>{quantity}</Amount>
                <Add onClick={() => handleQuantity("inc")} />
              </AmountContainer>
              <Button onClick={handleAddToCart}>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e4e7ed;
`;

const Image = styled.img`
  width: 65%;
  height: 80%;

  object-fit: cover;
  ${mobile({ height: "40vh" })}
  :hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

const InfoContainer = styled.div`
  flex: 1;

  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  color: teal;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border-radius: 30px;
  border: none;
  background-color: orange;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

export default SingleProductPage;
