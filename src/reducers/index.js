import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  LOGOUT_SUCCESS,
  FETCH_DISHES,
  ADD,
  REMOVE,
  EMPTY,
} from "../constants";

const initialState = { users: [], dishes: [], cart: [] };

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
    case FETCH_DISHES:
      return {
        ...state,
        dishes: action.payload,
      };
    case ADD:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case EMPTY:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default rootReducer;
