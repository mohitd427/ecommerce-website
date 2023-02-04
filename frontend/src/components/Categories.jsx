import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";
import SectionNav from "./SectionNav";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
  
`;

const Categories = () => {
  const heading = 'Category'
  return (
    <>
      <SectionNav Heading={heading} />
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
      </Container>
      </>
  );
};

export default Categories;
