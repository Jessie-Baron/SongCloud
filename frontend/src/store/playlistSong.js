import { csrfFetch } from './csrf';

export const LOAD_PLAYLIST_SONG = "playlistSongs/LOAD_PLAYLIST_SONG";
export const UPDATE_PLAYLIST_SONG = "playlistSongs/UPDATE_PLAYLIST_SONG";
export const REMOVE_PLAYLIST_SONG = "playlistSongs/REMOVE_PLAYLIST_SONG";
export const ADD_PLAYLIST_SONG = "playlistSongs/ADD_PLAYLIST_SONG";

export const load = (playlistSongs) => ({
    type: LOAD_PLAYLIST_SONG,
    playlistSongs
  });


  export const add = (playlistSong) => ({
    type: ADD_PLAYLIST_SONG,
    playlistSong
  });

  export const edit = (playlistSong) => ({
    type: UPDATE_PLAYLIST_SONG,
    playlistSong
  });

  export const remove = (playlistSongId) => ({
    type: REMOVE_PLAYLIST_SONG,
    playlistSongId
  })



  export const getPlaylistSongs = () => async dispatch => {

    const response = await csrfFetch(`/api/playlistSongs`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };

  export const getPlaylistSongDetails = (playlistSongId) => async dispatch => {

    const response = await csrfFetch(`/api/playlistSongs/${playlistSongId}`);

    if (response.ok) {
      const list = await response.json();
      dispatch(add(list));
    }
  };

  export const getPlaylistSongsByUser = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/artists/${userId}/playlistSongs`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };

  export const createPlaylistSong = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/playlistSongs`, {
    method: 'POST',
    body: JSON.stringify(payload)
  })

  if (response.ok) {
    const playlistSong = await response.json();
    dispatch(add(playlistSong));
  }
};

export const addSongToPlaylist = (playlistId, songId) => async dispatch => {
  const response = await csrfFetch(`/api/playlists/${playlistId}/songs`, {
    method: 'POST',
    body: JSON.stringify(playlistId, songId)
  })

  if (response.ok) {
    const playlistSong = await response.json();
    console.log("adding playlistSong")
    dispatch(add(playlistSong));
  }
};


export const editPlaylistSong = (playlistSongId, payload) => async dispatch => {
  const response = await csrfFetch(`/api/playlistSongs/${playlistSongId}`, {
    method: 'PUT',
    body: JSON.stringify(payload)
  })

  if (response.ok) {
    const playlistSong = await response.json();
    dispatch(add(playlistSong));
  }
};


export const deletePlaylistSong = (id) => async dispatch => {
  const response = await csrfFetch(`/api/playlistSongs/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    const list = await response.json();
    dispatch(remove(id));
  }
}
const initialState = {allPlaylistSongs: {}, singlePlaylistSong: {}};

const playlistSongReducer = (state = initialState, action) => {
  let newState = {...state}
    switch (action.type) {
      case LOAD_PLAYLIST_SONG:
        newState = {...state, allPlaylistSongs: {}}
        action.playlistSongs.playlistSongs.forEach(playlistSong => newState.allPlaylistSongs[playlistSong.id] = playlistSong)
        return newState;
      case UPDATE_PLAYLIST_SONG:
            newState.singlePlaylistSong = action.playlistSong
        return newState
      case ADD_PLAYLIST_SONG:
        newState.allPlaylistSongs[action.playlistSong.id] = action.playlistSong
        newState.singlePlaylistSong = action.playlistSong
          return newState;
      case REMOVE_PLAYLIST_SONG:
        newState = {...state, allPlaylistSongs: {...state.allPlaylistSongs}, singlePlaylistSong: {...state.singlePlaylistSong}}
        delete newState.allPlaylistSongs[action.playlistSongId]
        newState.singlePlaylistSong = {}
        return newState
      default:
        console.log('this is the current state:', state)
        return state;
    }
  }

  export default playlistSongReducer;
