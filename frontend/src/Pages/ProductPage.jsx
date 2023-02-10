import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/AnnounceNav";
import Products from "../components/Products";
// import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

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

  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');
  
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters, [e.target.name]: value
    })
    
  }
  console.log(filters);
  return (
    <>
      <Navbar />
      <Container>
        {/* <Title>Dresses</Title> */}
        <FilterContainer>
          <Filter>
            <FilterText>Filter By:</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>

            <Select name="size" onChange={handleFilters}>
              <Option disabled>Size</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort By:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value={"newest"}>Newest</Option>
              <Option value={"asc"}>Price (asc)</Option>
              <Option value={"desc"}>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort ={sort} />
        {/* <Newsletter /> */}
      </Container>
    </>
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