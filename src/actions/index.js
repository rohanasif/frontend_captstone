import axios from "axios";

export const getUsers = () => async () => {
  try {
    const response = await axios.get();
    const users = response.data;
    return users;
  } catch (e) {
    console.error(e);
  }
};
