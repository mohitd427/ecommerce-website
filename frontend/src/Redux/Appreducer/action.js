import * as types from './actionTypes';
import axios from "axios";

const getProducts = () => (dispatch)=>{
    dispatch({ type: types.GET_PRODUCT_REQUEST })
    return axios
      .get(`https://fine-cyan-kangaroo-cap.cyclic.app/products`)
      .then((r) => {
        console.log(r.data);
        dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: r.data });
      })
      .catch((e) => {
        console.log(e);
        dispatch({ type: types.GET_PRODUCT_FAILURE });
      });
}

export { getProducts }