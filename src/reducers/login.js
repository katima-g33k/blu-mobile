import {
  LOGIN_PENDING,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
} from '../actions/actionTypes';

const initialState = {
  email: 'jessy.lachapelle@gmail.com',
  password: '200940964',
  isLoading: false,
  error: false,
  loggedIn: false,
};

export default function login(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        error: action.error,
        isLoading: action.isLoading,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: action.error,
        isLoading: action.isLoading,
        loggedIn: action.loggedIn,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: action.isLoading,
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.password,
      }
    default:
      return state;
  }
}
