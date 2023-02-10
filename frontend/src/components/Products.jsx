import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { popularProducts } from "../data";
import ProductCard from "./ProductCard";
// import { useDispatch,useSelector } from 'react-redux';
// import { getProducts } from '../Redux/Appreducer/action';
// import { store } from '../Redux/store';
import SectionNav from "./SectionNav";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = (cat, filters, sort) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        axios
          .get(
            cat
              ? `http://localhost:8080/products?category=${cat}`
              : "http://localhost:8080/products"
          )
          .then((res) => setProducts(res.data));
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, filters, cat]);
console.log(filteredProducts);
  //   const { data, loading } = useSelector((store) => {
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

  console.log(cat, filters, sort);
  return (
    <>
      <Link to="/products" style={{ textDecoration: "none" }}>
        <SectionNav Heading={"PRODUCTS"} />
      </Link>
      <Container>
        {products.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Products;
