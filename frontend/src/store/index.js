import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import playlistReducer from './playlist';
import sessionReducer from './session';
import songReducer from './song';
import audioReducer from './songPlayer';
import commentReducer from './comment';
import playlistSongReducer from './playlistSong';
import followReducer from './follow';
import likeSongReducer from './songLike';
import likePlaylistReducer from './playlistLike';
import likeCommentReducer from './commentLike';

const rootReducer = combineReducers({
  session: sessionReducer,
  playlist: playlistReducer,
  songs: songReducer,
  songPlayer: audioReducer,
  comment: commentReducer,
  playlistSong: playlistSongReducer,
  follow: followReducer,
  songLike: likeSongReducer,
  playlistLike: likePlaylistReducer,
  commentLike: likeCommentReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };

  export default configureStore;
