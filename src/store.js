import { createStore } from 'redux';

const initialState = {
  name: '',
  category: '',
  authorFirst: '',
  authorLast: '',
};

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_AUTHOR_FIRST = 'UPDATE_FIRSTNAME';
export const UPDATE_AUTHOR_LAST = 'UPDATE_LASTNAME';

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_NAME:
      return { ...state, name: payload };

    case UPDATE_CATEGORY:
      return { ...state, category: payload };

    case UPDATE_AUTHOR_FIRST:
      return { ...state, first_name: payload };

    case UPDATE_AUTHOR_LAST:
      return { ...state, last_name: payload };

    default:
      return state;
  }
}

export default createStore(reducer);
