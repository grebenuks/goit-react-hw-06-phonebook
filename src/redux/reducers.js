import {
  GET_FORM_VALUE,
  DELETE_CONTACT,
  GET_FILTER_VALUE,
  SET_FILTERED_ARR,
  SET_LOCAL_DATA,
  SET_NOTIFY,
} from './types';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const phonebookReducer = (
  state = { ...initialState },
  { type, payload },
) => {
  switch (type) {
    case GET_FORM_VALUE:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, payload],
        },
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(contact => contact.id !== payload),
        },
      };

    case GET_FILTER_VALUE:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          filter: payload,
        },
      };

    case SET_FILTERED_ARR:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          filteredItems: state.contacts.items.filter(el =>
            el.name.toLowerCase().includes(state.contacts.filter.toLowerCase()),
          ),
        },
      };

    case SET_LOCAL_DATA:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...payload],
        },
      };

    case SET_NOTIFY:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          setNotify: payload,
        },
      };

    default:
      return state;
  }
};
