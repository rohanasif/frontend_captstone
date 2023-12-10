import axios from "axios";
import BASEURL from "../constants";
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
  } catch (e) {
    console.error(e);
  }
};

export const login = (user) => async (dispatch) => {
  try {
  } catch (e) {
    console.error(e);
  }
};

export const logout = (user) => async (dispatch) => {
  try {
  } catch (e) {
    console.error(e);
  }
};
