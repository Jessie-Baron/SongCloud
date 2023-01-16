import { csrfFetch } from './csrf';

export const LOAD_SONG = "songs/LOAD_SONGS";
export const UPDATE_SONG = "songs/UPDATE_SONG";
export const REMOVE_SONG = "songs/REMOVE_SONG";
export const ADD_SONG = "songs/ADD_SONG";

export const load = (songs) => ({
    type: LOAD_SONG,
    songs
  });


  export const add = (song) => ({
    type: ADD_SONG,
    song
  });

  export const edit = (song) => ({
    type: UPDATE_SONG,
    song
  });

  export const remove = (songId) => ({
    type: REMOVE_SONG,
    songId
  })



  export const getSongs = () => async dispatch => {

    const response = await csrfFetch(`/api/songs`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };

  export const getSongDetails = (songId) => async dispatch => {

    const response = await csrfFetch(`/api/songs/${songId}`);

    if (response.ok) {
      const list = await response.json();
      dispatch(add(list));
    }
  };

  export const getSongsByUser = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/artists/${userId}/songs`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };

  export const createSong = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/songs`, {
    method: 'POST',
    body: JSON.stringify(payload)
  })

  if (response.ok) {
    const song = await response.json();
    dispatch(add(song));
  }
};

// export const addSongToPlaylist = (playlistId, songId) => async dispatch => {
//   const response = await csrfFetch(`/api/playlists/${playlistId}/songs`, {
//     method: 'POST',
//     body: JSON.stringify(playlistId, songId)
//   })

//   if (response.ok) {
//     const song = await response.json();
//     console.log("adding song")
//     dispatch(add(song));
//   }
// };


export const editSong = (songId, payload) => async dispatch => {
  const response = await csrfFetch(`/api/songs/${songId}`, {
    method: 'PUT',
    body: JSON.stringify(payload)
  })

  if (response.ok) {
    const song = await response.json();
    dispatch(add(song));
  }
};


export const deleteSong = (id) => async dispatch => {
  const response = await csrfFetch(`/api/songs/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    const list = await response.json();
    dispatch(remove(id));
  }
}
const initialState = {allSongs: {}, singleSong: {}};

const songReducer = (state = initialState, action) => {
  let newState = {...state}
    switch (action.type) {
      case LOAD_SONG:
        newState = {...state, allSongs: {}}
        action.songs.Songs.forEach(song => newState.allSongs[song.id] = song)
        return newState;
      case UPDATE_SONG:
            newState.singleSong = action.song
        return newState
      case ADD_SONG:
        newState.allSongs[action.song.id] = action.song
        newState.singleSong = action.song
          return newState;
      case REMOVE_SONG:
        newState = {...state, allSongs: {...state.allSongs}, singleSong: {...state.singleSong}}
        delete newState.allSongs[action.songId]
        newState.singleSong = {}
        return newState
      default:
        console.log('this is the current state:', state)
        return state;
    }
  }

  export default songReducer;
