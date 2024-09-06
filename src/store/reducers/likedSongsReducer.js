import { TOGGLE_LIKE } from '../actions';

const initialState = {};

export const likedSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIKE:
      const songId = action.payload;
      return {
        ...state,
        [songId]: !state[songId],
      };
    default:
      return state;
  }
};