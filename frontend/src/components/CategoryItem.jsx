import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 60vh;
  position: relative;
  :hover {
    transform: scale(1.1);
    transition:.3s;
  }
`;

const Image = styled.img`
  width: 95%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  @media only screen and (min-width: 770px) and (max-width: 1200px) {
    font-size: 30px;
    white-space: nowrap;
  }
  @media only screen and (min-width: 320px) and (max-width: 770px) {
  
      font-size: 12px;
      width: auto;
      white-space: nowrap;
    }
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;

