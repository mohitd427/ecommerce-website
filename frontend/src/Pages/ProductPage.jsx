import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/AnnounceNav";
import Products from "../components/Products";
// import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductPage = () => {
  return (
    <Container>
      {/* <Title>Dresses</Title> */}
      <FilterContainer>
        <Filter>
          <FilterText>Filter By:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort By:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      {/* <Newsletter /> */}
    </Container>
  );
};

export default ProductPage;

// import React, { useEffect } from 'react';
// import { useDispatch,useSelector } from 'react-redux';
// import { getProducts } from '../Redux/Appreducer/action';
// // import { store } from '../Redux/store';

// const ProductPage = () => {
    
//       const { data, loading } = useSelector((store) => {
//         return {
//           data: store.Appreducer,
//           loading: store.Appreducer,
//         };
//       });
//     const dispatch = useDispatch();
// // console.log(data)

//     useEffect(() => {
//         dispatch(getProducts())
//     }, [])
    
    
//   return (
//     <div>ProductPage</div>
//   )
// }

// export default ProductPage