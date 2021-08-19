import axios from "axios";
import { Redirect } from "react-router-dom";
import { FAILUARE_REQ, REGISTER_REQ, SUCCESS_REQ } from "./actiontype";

export const registerRequest = (payload) => {
  return {
    type: REGISTER_REQ,
    payload,
  };
};

export const registerSuccess = (payload) => {
  return {
    type: SUCCESS_REQ,
    payload,
  };
};

export const registerFailure = (payload) => {
  return {
    type: FAILUARE_REQ,
    payload,
  };
};

export const registeruser = (payload) => (dispatch) => {
  console.log(payload, "after register");
  dispatch(registerRequest());
  axios.post('/users/signup', payload)
    .then(
      (response) => console.log(response),
      dispatch(registerSuccess("REGISTER SUCESSSS"))
    )
    .catch((err) => dispatch(registerFailure("Register Failure")));
};
