import axios from "axios";

import { saveData } from "../../utils/localStorage";

import {
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_PAGE,
} from "./actiontype";

export const loginRequest = (payload) => {
  return {
    type: LOGIN_REQ,
    payload,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginFailure = (payload) => {
  return {
    type: LOGIN_FAILURE,
    payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT_PAGE,
  };
};

export const login = (payload) => (dispatch) => {
  dispatch(loginRequest());
  
  axios.post('/users/login', { email: payload.email,
      password: payload.password,})
    .then((res) => {
      console.log(res,"tok")
      alert("You Have Successfully Logged in")
      dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
      alert("Email or Password wrong")
      dispatch(loginFailure(err));
    });
};
