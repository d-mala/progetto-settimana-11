export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';
export const SET_SONGS = 'SET_SONGS';
export const SEARCH_SONGS = 'SEARCH_SONGS';
export const SEARCH_START = 'SEARCH_START';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
});

export const toggleLike = (songId) => ({
  type: TOGGLE_LIKE,
  payload: songId,
});

export const setSongs = (searchId, songs) => ({
  type: SET_SONGS,
  payload: { searchId, songs },
});

export const searchSongs = (query, songs) => ({
  type: SEARCH_SONGS,
  payload: { query, songs },
});

export const searchStart = () => ({
  type: SEARCH_START
});

export const searchSuccess = (query, songs) => ({
  type: SEARCH_SUCCESS,
  payload: { query, songs }
});

export const searchError = (error) => ({
  type: SEARCH_ERROR,
  payload: error
});

export const performSearch = (query) => {
  return async (dispatch) => {
    dispatch(searchStart());
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(searchSuccess(query, data.slice(0, 12)));
      } else {
        throw new Error('Error in fetching songs');
      }
    } catch (err) {
      console.log('error', err);
      dispatch(searchError(err.message));
    }
  };
};