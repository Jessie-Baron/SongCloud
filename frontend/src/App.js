import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [songUrl, setSongUrl] = useState("")

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <AudioPlayer
            autoPlay
            src={songUrl}
            onPlay={e => console.log("onPlay")}
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
          <Route path="/playlists/:id">
            <PlaylistIndexItem />
            <AudioPlayer
            autoPlay
            src={songUrl}
            onPlay={e => console.log("onPlay")}
            />
          </Route>
          <Route path="/playlists">
            <PlaylistForm />
            <AudioPlayer
            autoPlay
            src={songUrl}/>
          </Route>
          <Route path="/songs/:id">
            <SongIndexItem />
            <AudioPlayer
            autoPlay
            src={songUrl}
            />
          </Route>
          <Route path="/songs">
            <SongForm />
            <AudioPlayer
            autoPlay
            src={songUrl}/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
