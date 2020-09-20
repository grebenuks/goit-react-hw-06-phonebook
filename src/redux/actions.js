import { GET_FORM_VALUE } from './types';
import { DELETE_CONTACT } from './types';
import { GET_FILTER_VALUE } from './types';
import { SET_FILTERED_ARR } from './types';
import { SET_LOCAL_DATA } from './types';
import { SET_NOTIFY } from './types';

export const getFormValue = data => ({
  type: GET_FORM_VALUE,
  payload: data,
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const getFilterValue = value => ({
  type: GET_FILTER_VALUE,
  payload: value,
});

export const setFilteredArr = value => ({
  type: SET_FILTERED_ARR,
  payload: value,
});

export const setLocalData = data => ({
  type: SET_LOCAL_DATA,
  payload: data,
});

export const setNotify = bool => ({
  type: SET_NOTIFY,
  payload: bool,
});
