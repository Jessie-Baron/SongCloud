import { csrfFetch } from './csrf';

export const LOAD_LIKE_SONG = "likeSongs/LOAD_LIKE_SONG";
export const UPDATE_LIKE_SONG = "likeSongs/UPDATE_LIKE_SONG";
export const REMOVE_LIKE_SONG = "likeSongs/REMOVE_LIKE_SONG";
export const ADD_LIKE_SONG = "likeSongs/ADD_LIKE_SONG";

export const load = (likeSongs) => ({
    type: LOAD_LIKE_SONG,
    likeSongs
  });


  export const add = (likeSong) => ({
    type: ADD_LIKE_SONG,
    likeSong
  });

  export const edit = (likeSong) => ({
    type: UPDATE_LIKE_SONG,
    likeSong
  });

  export const remove = (likeSongId) => ({
    type: REMOVE_LIKE_SONG,
    likeSongId
  })



  export const getLikeSongs = () => async dispatch => {

    const response = await csrfFetch(`/api/likeSongs`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };

  export const getLikeSongDetails = (likeSongId) => async dispatch => {

    const response = await csrfFetch(`/api/likeSongs/${likeSongId}`);

    if (response.ok) {
      const list = await response.json();
      dispatch(add(list));
    }
  };

  export const getLikeSongsByUser = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/artists/${userId}/likeSongs`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };

  export const createLikeSong = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/likeSongs`, {
    method: 'POST',
    body: JSON.stringify(payload)
  })

  if (response.ok) {
    const likeSong = await response.json();
    dispatch(add(likeSong));
  }
};


export const deleteLikeSong = (id) => async dispatch => {
  const response = await csrfFetch(`/api/likeSongs/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    const list = await response.json();
    dispatch(remove(id));
  }
}

const initialState = {allLikeSongs: {}, singleLikeSong: {}};

const likeSongReducer = (state = initialState, action) => {
  let newState = {...state}
    switch (action.type) {
      case LOAD_LIKE_SONG:
        newState = {...state, allLikeSongs: {}}
        action.likeSongs.LikeSongs.forEach(likeSong => newState.allLikeSongs[likeSong.id] = likeSong)
        return newState;
      case UPDATE_LIKE_SONG:
            newState.singleLikeSong = action.likeSong
        return newState
      case ADD_LIKE_SONG:
        newState.allLikeSongs[action.likeSong.id] = action.likeSong
        newState.singleLikeSong = action.likeSong
          return newState;
      case REMOVE_LIKE_SONG:
        newState = {...state, allLikeSongs: {...state.allLikeSongs}, singleLikeSong: {...state.singleLikeSong}}
        delete newState.allLikeSongs[action.likeSongId]
        newState.singleLikeSong = {}
        return newState
      default:
        console.log('this is the current state:', state)
        return state;
    }
  }

  export default likeSongReducer;
