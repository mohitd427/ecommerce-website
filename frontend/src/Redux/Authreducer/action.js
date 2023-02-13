import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

import * as types from "./actionTypes";

//reg  ister user function
// https://fine-cyan-kangaroo-cap.cyclic.app/
const userRegiter = (payload) => (dispatch) => {
  dispatch({ type: types.REGISTER_USER_REQUEST });
  return axios
    .get(`http://localhost:8080/users/register`)
    .then((r) => {
      console.log("In register js action userRegister",r.data);
      dispatch({ type: types.REGISTER_USER_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      console.log(e);
      dispatch({ type: types.REGISTER_USER_FAILURE });
    });
};

const get_login_req_fn = () => {
  return { type: types.LOGIN_REQ };
};
const get_login_succ_fn = (userdata) => {
  return { type: types.LOGIN_SUCC, payload: userdata };
};
const get_login_failure_fn = () => {
  return { type: types.LOGIN_FAILURE };
};

const Login_handeler = (payload) => (dispatch) => {
  dispatch(get_login_req_fn());
  return axios
    .post("https://lazy-puce-fawn.cyclic.app/user/login", payload)
    .then((res) => {
       console.log(res.data)
      dispatch(get_login_succ_fn(res.data))
    
    })
    .catch((err) => {
      console.log(err,"error");
      dispatch(get_login_failure_fn());
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
