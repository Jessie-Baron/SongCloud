import { useParams } from 'react-router-dom';

export const LOAD_PLAYLISTS = "PLAYLISTs/LOAD_PLAYLISTS";
export const UPDATE_PLAYLIST = "PLAYLISTs/UPDATE_PLAYLIST";
export const REMOVE_PLAYLIST = "PLAYLISTs/REMOVE_PLAYLIST";
export const ADD_PLAYLIST = "PLAYLISTs/ADD_PLAYLIST";

const load = (playlists) => ({
    type: LOAD_PLAYLISTS,
    playlists
  });

  const update = (playlistId) => ({
    type: UPDATE_PLAYLIST,
    playlistId
  });

  const add = (playlist) => ({
    type: ADD_PLAYLIST,
    playlist
  });

  const remove = (playlistId) => ({
    type: REMOVE_PLAYLIST,
    playlistId,
  });

  const initialState = {};

  export const getPlaylists = () => async dispatch => {
    const response = await fetch(`/api/playlists`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };

  export const getPlaylist = () => async dispatch => {
    const { id } = useParams()
    const response = await fetch(`/api/playlists/${id}`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };
