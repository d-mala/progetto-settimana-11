// Definizione delle costanti per i tipi di action
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';
export const SET_SONGS = 'SET_SONGS';
export const SEARCH_SONGS = 'SEARCH_SONGS';

// Action creator
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

export const performSearch = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(searchSongs(query, data.slice(0, 12)));
      } else {
        throw new Error('Error in fetching songs');
      }
    } catch (err) {
      console.log('error', err);
    }
  };
};