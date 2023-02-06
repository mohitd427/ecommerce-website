import { Link } from "react-router-dom";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductCard from "./ProductCard";
import SectionNav from "./SectionNav";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
    return (
      <>
        <Link to="/products" style={{textDecoration:'none'}}>
             
          <SectionNav Heading={"PRODUCTS"} />
        </Link>
        <Container>
          {popularProducts.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </Container>
      </>
    );
};

export default Products;