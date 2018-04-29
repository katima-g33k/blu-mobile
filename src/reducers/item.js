import {
  GET_ITEM_FAIL,
  GET_ITEM_PENDING,
  GET_ITEM_SUCCESS,
} from '../actions/actionTypes';
import Item from '../lib/models/Item';

const initialState = {
  item: new Item(),
};

export default function item(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ITEM_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case GET_ITEM_PENDING:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case GET_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        item: new Item(action.item),
      };
    default:
      return state;
  }
}
