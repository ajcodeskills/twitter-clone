import { loadData, saveData } from "../../utils/localStorage";
import {
  LOGIN_FAILURE,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGOUT_PAGE,
} from "./actiontype";

const initstate = loadData("data") || {
  _id: "",
  token:"",
  isAuth: false,
  isloading: false,
  isError: false,
  email: "",
  username: "",
}
export const LoginReducer = (state = initstate, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQ:
      return {
        ...state,
        isloading: true,
      };
    case LOGIN_SUCCESS: {
      const datalocal = {
        ...state,
        isloading: false,
        isAuth: true,
        _id: payload.user._id,
        token:payload.token,
        email: payload.user.email,
        name: payload.user.name,
      };

      saveData("data", datalocal);
      return datalocal;
    }
    case LOGIN_FAILURE:
      return {
        ...state,
        isloading: false,
        isError: true,
      };
    case LOGOUT_PAGE:
      localStorage.removeItem("auth");
      localStorage.removeItem("data");

      // saveData("auth", false);
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
