import axios from "axios";
import BASEURL, {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from "../constants";

export const getUsers = () => async () => {
  try {
    const response = await axios.get(`${BASEURL}/users`);
    const users = response.data;
    return users;
  } catch (e) {
    console.error(e);
  }
};

export const signup = (user) => async (dispatch) => {
  try {
    const allUsers = await dispatch(getUsers());
    if (
      allUsers.length === 0 ||
      !allUsers.find((u) => u.email === user.email)
    ) {
      const response = await axios.post(`${BASEURL}/users`, user);
      dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
      alert("Registration successful!");
    } else {
      dispatch({ type: SIGNUP_ERROR, payload: "User already registered!" });
    }
  } catch (e) {
    console.error(e);
  }
};

export const login = (user) => async (dispatch) => {
  try {
    const allUsers = await dispatch(getUsers());
    const userLoggingIn = allUsers.find(
      (u) => u.password === user.password && u.email === user.email
    );
    if (userLoggingIn) {
      const response = await axios.patch(
        `${BASEURL}/users/${userLoggingIn.id}`,
        { isLoggedin: true }
      );
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      alert("Login successful!");
    } else {
      dispatch({ type: SIGNUP_ERROR, payload: "Invalid login credentials!" });
    }
  } catch (e) {
    console.error(e);
  }
};

export const getLoggedUser = () => async () => {
  try {
    const response = await axios.get(`${BASEURL}/users?isLoggedin=true`);
    const userArr = response.data;
    const user = userArr[0];
    return user;
  } catch (e) {
    console.error(e);
  }
};

export const logout = (user) => async (dispatch) => {
  try {
    const response = await axios.patch(`${BASEURL}/users/${user.id}`, {
      isLoggedin: false,
    });
    dispatch({ type: LOGOUT_SUCCESS, payload: response.data });
  } catch (e) {
    console.error(e);
  }
};
