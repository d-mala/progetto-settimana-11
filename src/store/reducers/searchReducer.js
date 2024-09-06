import { SEARCH_START, SEARCH_SUCCESS, SEARCH_ERROR } from '../actions';

const initialState = {
  results: [],
  query: '',
  isLoading: false,
  error: null
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case SEARCH_SUCCESS:
      return {
        results: action.payload.songs,
        query: action.payload.query,
        isLoading: false,
        error: null
      };
    case SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};