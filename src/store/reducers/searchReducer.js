import { SEARCH_SONGS } from '../actions';

const initialState = {
  results: [], // Inizializza come array vuoto
  query: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SONGS:
      return {
        results: action.payload.songs,
        query: action.payload.query,
      };
    default:
      return state;
  }
};