import { csrfFetch } from './csrf';

export const LOAD_LIKE_COMMENT = "likeComments/LOAD_LIKE_COMMENT";
export const UPDATE_LIKE_COMMENT = "likeComments/UPDATE_LIKE_COMMENT";
export const REMOVE_LIKE_COMMENT = "likeComments/REMOVE_LIKE_COMMENT";
export const ADD_LIKE_COMMENT = "likeComments/ADD_LIKE_COMMENT";

export const load = (likeComments) => ({
    type: LOAD_LIKE_COMMENT,
    likeComments
  });


  export const add = (likeComment) => ({
    type: ADD_LIKE_COMMENT,
    likeComment
  });

  export const edit = (likeComment) => ({
    type: UPDATE_LIKE_COMMENT,
    likeComment
  });

  export const remove = (likeCommentId) => ({
    type: REMOVE_LIKE_COMMENT,
    likeCommentId
  })



  export const getLikeComments = () => async dispatch => {

    const response = await csrfFetch(`/api/likeComments`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };

  export const getLikeCommentDetails = (likeCommentId) => async dispatch => {

    const response = await csrfFetch(`/api/likeComments/${likeCommentId}`);

    if (response.ok) {
      const list = await response.json();
      dispatch(add(list));
    }
  };

  export const getLikeCommentsByUser = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/artists/${userId}/likeComments`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };

  export const createLikeComment = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/likeComments`, {
    method: 'POST',
    body: JSON.stringify(payload)
  })

  if (response.ok) {
    const likeComment = await response.json();
    dispatch(add(likeComment));
  }
};


export const deleteLikeComment = (id) => async dispatch => {
  const response = await csrfFetch(`/api/likeComments/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    const list = await response.json();
    dispatch(remove(id));
  }
}

const initialState = {allLikeComments: {}, singleLikeComment: {}};

const likeCommentReducer = (state = initialState, action) => {
  let newState = {...state}
    switch (action.type) {
      case LOAD_LIKE_COMMENT:
        newState = {...state, allLikeComments: {}}
        action.likeComments.likeComments.forEach(likeComment => newState.allLikeComments[likeComment.id] = likeComment)
        return newState;
      case UPDATE_LIKE_COMMENT:
            newState.singleLikeComment = action.likeComment
        return newState
      case ADD_LIKE_COMMENT:
        newState.allLikeComments[action.likeComment.id] = action.likeComment
        newState.singleLikeComment = action.likeComment
          return newState;
      case REMOVE_LIKE_COMMENT:
        newState = {...state, allLikeComments: {...state.allLikeComments}, singleLikeComment: {...state.singlelikeComment}}
        delete newState.allLikeComments[action.likeCommentId]
        newState.singleLikeComment = {}
        return newState
      default:
        console.log('this is the current state:', state)
        return state;
    }
  }

  export default likeCommentReducer;
