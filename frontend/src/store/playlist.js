import { useParams } from 'react-router-dom';
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

  const initialState = {};

  export const getPlaylistsByArtist = (userId) => async dispatch => {

    const response = await csrfFetch(`/api/artists/${userId}/playlists`);

    if (response.ok) {
      const list = await response.json();
      console.log("this is the list item", list)
      dispatch(load(list));
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

export const updatePlaylist = () => async dispatch => {
  const { id } = useParams()
  const response = await csrfFetch(`/api/playlists/${id}`);

  if (response.ok) {
    const list = await response.json();
    dispatch(edit(list));
  }
};

export const deletePlaylist = () => async dispatch => {
  const { id } = useParams()
  const response = await csrfFetch(`/api/playlists/${id}`);

  if (response.ok) {
    const list = await response.json();
    dispatch(remove(list));
  }
}

const playlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD_PLAYLISTS:
        const allPlaylists = {};
        console.log("this is the action", action)
        action.playlists.Playlists.forEach(playlist => {
          allPlaylists[playlist.id] = playlist;
        });
        return {
          allPlaylists,
          ...state
        };
        case UPDATE_PLAYLIST:
          return {
            ...state,
            [action.playlist.id]: {
              ...state[action.playlist.id]
            }
          };
      case ADD_PLAYLIST:
        if (!state[action.playlist.id]) {
          const newState = {
            ...state,
            [action.playlist.id]: action.playlist
          };
          return newState;
        }
        return {
          ...state,
          [action.playlist.id]: {
            ...state[action.playlist.id],
            ...action.playlist
          }
        };
      case REMOVE_PLAYLIST:
        delete {...state[action.playlist.id]}
        return {...state}
      default:
        console.log('this is the current state:', state)
        return state;
    }
  }

  export default playlistReducer;
