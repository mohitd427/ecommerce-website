import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getProducts } from '../Redux/Appreducer/action';
import { store } from '../Redux/store';

const ProductPage = () => {
    
      const { data, loading } = useSelector((store) => {
        return {
          data: store.Appreducer,
          loading: store.Appreducer,
        };
      });
    const dispatch = useDispatch();
// console.log(data)

    useEffect(() => {
        dispatch(getProducts())
    }, [])
    
    
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage