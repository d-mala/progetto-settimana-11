import { SET_SONGS } from '../actions';

const initialState = {
  searchResults1: [],
  searchResults2: [],
  searchResults3: []
};

export const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        [action.payload.searchId]: action.payload.songs,
      };
    default:
      return state;
  }
};