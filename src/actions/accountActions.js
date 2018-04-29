import {
  GET_MEMBER_PENDING,
  GET_MEMBER_FAIL,
  GET_MEMBER_SUCCESS,
} from './actionTypes';
import API from '../lib/api/API';

export const getMemberPending = () => ({
  error: '',
  isLoading: true,
  type: GET_MEMBER_PENDING,
});

export const getMemberSuccess = member => ({
  error: '',
  isLoading: false,
  member,
  type: GET_MEMBER_SUCCESS,
});

export const getMemberFail = error => ({
  error,
  isLoading: false,
  type: GET_MEMBER_FAIL,
});

export const getMember = no => async (dispatch) => {
  dispatch(getMemberPending());

  try {
    const member = await API.member.get(no);
    dispatch(getMemberSuccess(member));
  } catch (error) {
    dispatch(getMemberFail(error));
  }
};
