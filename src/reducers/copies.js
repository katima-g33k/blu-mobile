import {
  LIST_COPIES,
} from '../actions/actionTypes';

const initialState = {
  copies: [],
};

export default function copies(state = initialState, action = {}) {
  switch (action.type) {
    case LIST_COPIES:
      return {
        ...state,
        copies: action.copies,
      };
    default:
      return state;
  }
}
