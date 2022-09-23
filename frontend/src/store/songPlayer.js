import { csrfFetch } from './csrf';

export const LOAD_AUDIO = "audios/LOAD_AUDIOS";
export const REMOVE_AUDIO = "audios/REMOVE_AUDIOS";
export const ADD_AUDIO = "audios/ADD_AUDIOS";

export const load = (audios) => ({
    type: LOAD_AUDIO,
    audios
  });


  export const add = (audio) => ({
    type: ADD_AUDIO,
    audio
  });


  export const remove = (audioId) => ({
    type: REMOVE_AUDIO,
    audioId
  })



  export const getAudio = (songId) => async dispatch => {

    const response = await csrfFetch(`/api/songs/${songId}`);
    console.log("this is the response", response)
    if (response.ok) {
      const list = await response.json();
      console.log("this is the list item", list)
      dispatch(add(list));
      return list
    }
  };

  export const createAudio = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/songs`, {
    method: 'POST',
    body: JSON.stringify(payload)
  })

  if (response.ok) {
    const audio = await response.json();
    dispatch(add(audio));
  }
};

export const addAudioToPlaylist = (playlistId, audioId) => async dispatch => {
  const response = await csrfFetch(`/playlists/${playlistId}/audios`, {
    method: 'POST',
    body: JSON.stringify(audioId)
  })

  if (response.ok) {
    const audio = await response.json();
    dispatch(add(audio));
  }
};


export const editAudio = (audioId, payload) => async dispatch => {
  const response = await csrfFetch(`/api/audios/${audioId}`, {
    method: 'PUT',
    body: JSON.stringify(payload)
  })

  if (response.ok) {
    const audio = await response.json();
    dispatch(add(audio));
  }
};

const initialState = {currentSong: {}, currentPlaylist: {}};

const audioReducer = (state = initialState, action) => {
  let newState = {...state}
    switch (action.type) {
      case LOAD_AUDIO:
        newState = {...state, currentPlaylist: {}}
        action.audios.playlist.forEach(song => newState.currentPlaylist[song.id] = song)
        return newState;
      case ADD_AUDIO:
        newState.currentSong = action.audio
          return newState;
      case REMOVE_AUDIO:
        newState = {...state, currentPlaylist: {...state.currentPlaylist}, currentSong: {...state.currentSong}}
        delete newState.currentPlaylist[action.audioId]
        newState.currentSong = {}
        return newState
      default:
        console.log('this is the current state:', state)
        return state;
    }
  }

  export default audioReducer;
