import { csrfFetch } from './csrf';

export const LOAD_LIKE_PLAYLIST = "likePlaylists/LOAD_LIKE_PLAYLIST";
export const UPDATE_LIKE_PLAYLIST = "likePlaylists/UPDATE_LIKE_PLAYLIST";
export const REMOVE_LIKE_PLAYLIST = "likePlaylists/REMOVE_LIKE_PLAYLIST";
export const ADD_LIKE_PLAYLIST = "likePlaylists/ADD_LIKE_PLAYLIST";

export const load = (likePlaylists) => ({
    type: LOAD_LIKE_PLAYLIST,
    likePlaylists
  });


  export const add = (likePlaylist) => ({
    type: ADD_LIKE_PLAYLIST,
    likePlaylist
  });

  export const edit = (likePlaylist) => ({
    type: UPDATE_LIKE_PLAYLIST,
    likePlaylist
  });

  export const remove = (likePlaylistId) => ({
    type: REMOVE_LIKE_PLAYLIST,
    likePlaylistId
  })



  export const getLikePlaylists = () => async dispatch => {

    const response = await csrfFetch(`/api/likePlaylists`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };

  export const getLikePlaylistDetails = (likePlaylistId) => async dispatch => {

    const response = await csrfFetch(`/api/likePlaylists/${likePlaylistId}`);

    if (response.ok) {
      const list = await response.json();
      dispatch(add(list));
    }
  };

  export const getLikePlaylistsByUser = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/artists/${userId}/likePlaylists`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };

  export const createLikePlaylist = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/likePlaylists`, {
    method: 'POST',
    body: JSON.stringify(payload)
  })

  if (response.ok) {
    const likePlaylist = await response.json();
    dispatch(add(likePlaylist));
  }
};


export const deleteLikePlaylist = (id) => async dispatch => {
  const response = await csrfFetch(`/api/likePlaylists/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    const list = await response.json();
    dispatch(remove(id));
  }
}

const initialState = {allLikePlaylists: {}, singleLikePlaylist: {}};

const likePlaylistReducer = (state = initialState, action) => {
  let newState = {...state}
    switch (action.type) {
      case LOAD_LIKE_PLAYLIST:
        newState = {...state, allLikePlaylists: {}}
        action.likePlaylists.likePlaylists.forEach(likePlaylist => newState.allLikePlaylists[likePlaylist.id] = likePlaylist)
        return newState;
      case UPDATE_LIKE_PLAYLIST:
            newState.singleLikePlaylist = action.likePlaylist
        return newState
      case ADD_LIKE_PLAYLIST:
        newState.allLikePlaylists[action.likePlaylist.id] = action.likePlaylist
        newState.singleLikePlaylist = action.likePlaylist
          return newState;
      case REMOVE_LIKE_PLAYLIST:
        newState = {...state, allLikePlaylists: {...state.allLikePlaylists}, singleLikePlaylist: {...state.singlelikePlaylist}}
        delete newState.allLikePlaylists[action.likePlaylistId]
        newState.singleLikePlaylist = {}
        return newState
      default:
        console.log('this is the current state:', state)
        return state;
    }
  }

  export default likePlaylistReducer;
