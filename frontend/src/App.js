import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import PlaylistIndex from "./components/playlistIndex/PlaylistIndex.js";
import PlaylistIndexItem from "./components/playlistIndex/PlaylistIndexItem";
import PlaylistForm from "./components/playlistIndex/PlaylistForm";
import SongIndex from "./components/SongIndex/SongIndex";
import AllSongsIndex from "./components/SongIndex/allSongsIndex";
import SongIndexItem from "./components/SongIndex/SongIndexItem";
import SongForm from "./components/SongIndex/SongForm";
import SongIndexItemNoAuth from "./components/SongIndex/SongIndexItemNoAuth";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const currentSong = useSelector(state => state.songPlayer.currentSong)
  const playlistObject = useSelector(state => state.songPlayer.currentPlaylist)
  const currentPlaylist = Object.values(playlistObject)
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <AudioPlayer
            autoPlay
            src={currentSong.url}
        />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <PlaylistIndex />
            <SongIndex />
            <AllSongsIndex />
          </Route>
          <Route exact path="/allSongs">
            <SongIndex />
            <AllSongsIndex />
          </Route>
          <Route exact path="/allPlaylists">
            <PlaylistIndex />
          </Route>
          <Route path="/playlists/:id">
            <PlaylistIndexItem />
          </Route>
          <Route path="/playlists">
            <PlaylistForm />
          </Route>
          <Route path="/songs/:id">
            <SongIndexItem />
          </Route>
          <Route path="/songs">
            <SongForm />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
