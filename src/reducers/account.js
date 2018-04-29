import {
  GET_MEMBER_PENDING,
  GET_MEMBER_SUCCESS,
  GET_MEMBER_FAIL,
} from '../actions/actionTypes';
import Member from '../lib/models/Member';

const initialState = {
  member: new Member(),
};

export default function account(state = initialState, action = {}) {
  switch (action.type) {
    case GET_MEMBER_PENDING:
      return {
        ...state,
        error: action.error,
        isLoading: action.isLoading,
      };
    case GET_MEMBER_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        member: new Member(action.member),
      };
    case GET_MEMBER_FAIL:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
      };
    default:
      return state;
  }
}
