import { combineReducers } from 'redux';
import { currentSongReducer } from './reducers/currentSongReducer';
import { likedSongsReducer } from './reducers/likedSongsReducer';
import { songsReducer } from './reducers/songsReducer';
import { searchReducer } from './reducers/searchReducer';

const rootReducer = combineReducers({
  currentSong: currentSongReducer,
  likedSongs: likedSongsReducer,
  songs: songsReducer,
  search: searchReducer,
});

export default rootReducer;