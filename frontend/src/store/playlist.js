import { csrfFetch } from './csrf';

export const LOAD_PLAYLISTS = "playlists/LOAD_PLAYLISTS";
export const UPDATE_PLAYLIST = "playlists/UPDATE_PLAYLIST";
export const REMOVE_PLAYLIST = "playlists/REMOVE_PLAYLIST";
export const ADD_PLAYLIST = "playlists/ADD_PLAYLIST";

export const load = (playlists) => ({
    type: LOAD_PLAYLISTS,
    playlists
  });


  export const add = (playlist) => ({
    type: ADD_PLAYLIST,
    playlist
  });

  export const edit = (playlist) => ({
    type: UPDATE_PLAYLIST,
    playlist
  });

  export const remove = (playlistId) => ({
    type: REMOVE_PLAYLIST,
    playlistId
  })



  export const getPlaylistsByArtist = (userId) => async dispatch => {

    const response = await csrfFetch(`/api/artists/${userId}/playlists`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };

  export const getPlaylistDetails = (playlistId) => async dispatch => {

    const response = await csrfFetch(`/api/playlists/${playlistId}`);

    if (response.ok) {
      const list = await response.json();
      dispatch(add(list));
    }
  };

  export const getPlaylistByUser = () => async dispatch => {
    const response = await csrfFetch(`/api/playlists/current`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };

  export const createPlaylist = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/playlists`, {
    method: 'POST',
    body: JSON.stringify(payload)
  })

  if (response.ok) {
    const playlist = await response.json();
    dispatch(add(playlist));
  }
};


export const deletePlaylist = (id) => async dispatch => {
  const response = await csrfFetch(`/api/playlists/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    const list = await response.json();
    dispatch(remove(id));
  }
}
const initialState = {allPlaylists: {}, singlePlaylist: {}};

const playlistReducer = (state = initialState, action) => {
  let newState = {...state}
    switch (action.type) {
      case LOAD_PLAYLISTS:
        newState = {...state, allPlaylists: {}}
        action.playlists.Playlists.forEach(playlist => newState.allPlaylists[playlist.id] = playlist)
        return newState;
      case UPDATE_PLAYLIST:
          return {
            ...state,
            [action.playlist.id]: {
              ...state[action.playlist.id]
            }
          };
      case ADD_PLAYLIST:
        newState.allPlaylists[action.playlist.id] = action.playlist
        newState.singlePlaylist = action.playlist
          return newState;
      case REMOVE_PLAYLIST:
        newState = {...state, allPlaylists: {...state.allPlaylists}, singlePlaylist: {...state.singlePlaylist}}
        delete newState.allPlaylists[action.playlistId]
        newState.singlePlaylist = {}
        return newState
      default:
        console.log('this is the current state:', state)
        return state;
    }
  }

  export default playlistReducer;
