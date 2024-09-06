import { SEARCH_START, SEARCH_SUCCESS, SEARCH_ERROR } from '../actions';

const initialState = {
  results: [],
  allResults: {},  // Aggiungiamo questo per mantenere tutti i risultati di ricerca
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
        ...state,
        results: action.payload.songs,
        allResults: {
          ...state.allResults,
          [action.payload.query]: action.payload.songs
        },
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