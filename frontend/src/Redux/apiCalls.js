import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicReq } from "../requestMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
      await publicReq.post("/users/login", user)
      .then((res) => dispatch(loginSuccess(res.data)))
  } catch (err) {
    dispatch(loginFailure());
  }
};

// export const register = async (dispatch, user) => {
//   dispatch(registerStart());
//   try {
//     await publicReq
//       .post("/users/register", user)
//       .then((res) => dispatch(registerSuccess(res.data)));
//   } catch (err) {
//     dispatch(registerFailure());
//   }
// };