/* eslint import/prefer-default-export: 0 */
import {
  LIST_COPIES,
} from './actionTypes';

export const listCopies = copies => ({
  copies,
  type: LIST_COPIES,
});
