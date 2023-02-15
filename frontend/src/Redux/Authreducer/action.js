import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

import * as types from "./actionTypes";

//reg  ister user function
// https://fine-cyan-kangaroo-cap.cyclic.app/
const userRegiter = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_USER_REQUEST });
  return axios
    .post(`http://localhost:8080/users/register`)
    .then((r) => {
      console.log("In register js action userRegister",r.data);
      dispatch({ type: types.REGISTER_USER_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.REGISTER_USER_FAILURE });
    });
};



const Login_handeler = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQEST});
  return axios
    .post("http://localhost:8080/users/login", payload)
    .then((res) => {
       console.log(res.data)
      dispatch({type:types.LOGIN_SUCCESS,payload:r.data})    
    })
    .catch((err) => {
      console.log(err,"error");
      dispatch({type:types.LOGIN_FAILURE});
    });
};

const Register = (payload) => (dispatch) => {
  dispatch(Get_user_req_fn());
  return axios
    .post("https://lazy-puce-fawn.cyclic.app/user/register", payload)
    .then((res) => {
      console.log(res.data.msg);

      dispatch(Get_user_register_succ_fn(res.data.msg));
    })
    .catch((err) => {
     

      dispatch(Get_user_register_error_fn(err.response.data.err));
    });
};

export {
  Get_user_register_error_fn,
  Get_user_register_succ_fn,
  Get_user_req_fn,
  Register,
  Login_handeler,
};
