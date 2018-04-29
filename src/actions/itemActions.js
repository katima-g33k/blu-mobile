/* eslint import/prefer-default-export: 0 */
import { Actions } from 'react-native-router-flux';

import API from '../lib/api/API';
import {
  GET_ITEM_FAIL,
  GET_ITEM_PENDING,
  GET_ITEM_SUCCESS,
} from './actionTypes';

export const getItemFail = error => ({
  error,
  type: GET_ITEM_FAIL,
});

export const getItemPending = () => ({
  type: GET_ITEM_PENDING,
});

export const getItemSuccess = item => ({
  item,
  type: GET_ITEM_SUCCESS,
});

export const getItem = id => async (dispatch) => {
  dispatch(getItemPending());

  try {
    const item = await API.item.get(id);
    dispatch(getItemSuccess(item));
    Actions.push('itemView');
  } catch (error) {
    dispatch(getItemFail(error));
  }
};
