import { SET_CURRENT_SONG } from '../actions';

const initialState = null;

export const currentSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return action.payload;
    default:
      return state;
  }
};