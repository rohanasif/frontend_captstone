import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  LOGOUT_SUCCESS,
} from "../constants";

const initialState = { users: [], dishes: [], message: "" };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return { ...state, users: [...state.users, action.payload] };
    case SIGNUP_ERROR:
      return {
        ...state,
        message: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...user, isLoggedin: true } : user
        ),
      };
    case LOGIN_ERROR:
      return {
        ...state,
        message: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...user, isLoggedin: false } : user
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
