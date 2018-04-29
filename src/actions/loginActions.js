import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
} from './actionTypes';
import API from '../lib/api/API';
import { getMember } from './accountActions';

export function handleInput({ email, password }) {
  return {
    email,
    password,
    type: email !== undefined ? UPDATE_EMAIL : UPDATE_PASSWORD,
  };
}

export function loginPending() {
  return {
    error: false,
    isLoading: true,
    type: LOGIN_PENDING,
  };
}

export function loginSuccess() {
  return {
    error: false,
    isLoading: false,
    type: LOGIN_SUCCESS,
    loggedIn: true,
  };
}

export const loginFail = () => ({
  error: true,
  isLoading: false,
  type: LOGIN_FAIL,
});

export const handleLogin = (email, password) => async (dispatch) => {
  dispatch(loginPending());

  try {
    dispatch(loginSuccess(await API.member.login(email, password)));
  } catch (error) {
    dispatch(loginFail(error));
  }
};
