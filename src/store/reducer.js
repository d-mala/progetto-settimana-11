import { SET_CURRENT_SONG, TOGGLE_LIKE, SET_SONGS, SEARCH_SONGS } from './actions';

const initialState = {
  currentSong: null,
  likedSongs: {},
  songs: {
    searchResults1: [],
    searchResults2: [],
    searchResults3: []
  },
  searchResults: [],
  searchQuery: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    case TOGGLE_LIKE:
      const songId = action.payload;
      const isLiked = state.likedSongs[songId];
      return {
        ...state,
        likedSongs: {
          ...state.likedSongs,
          [songId]: !isLiked,
        },
      };
    case SET_SONGS:
      return {
        ...state,
        songs: {
          ...state.songs,
          [action.payload.searchId]: action.payload.songs,
        },
      };
    case SEARCH_SONGS:
      return {
        ...state,
        searchResults: action.payload.songs,
        searchQuery: action.payload.query,
      };
    default:
      return state;
  }
};

export default rootReducer;