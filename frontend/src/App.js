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
import SplashSongs from "./components/SongIndex/SplashSongs";
import SongIndexItem from "./components/SongIndex/SongIndexItem";
import SongForm from "./components/SongIndex/SongForm";
import AudioPlayer from 'react-h5-audio-player';
import ProfileSidebar from "./components/ProfileSidebar/ProfileSidebar";
import SongYouMightLike from "./components/SongIndex/SongsYouMightLike";
import 'react-h5-audio-player/lib/styles.css';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const currentUser = useSelector(state => state.session.user)
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
            <img alt="" src="https://p300-americantownscom.netdna-ssl.com/img/article/fl-music-festival-1.jpg" className="splash-pic" />
            <SplashSongs />
          </Route>
          <Route path="/home">
            <ProfileSidebar />
            <PlaylistIndex />
            <SongYouMightLike />
            <SongYouMightLike />
            <SongYouMightLike />
            <SongYouMightLike />
            <SongYouMightLike />
            <SongIndex />
          </Route>
          <Route exact path="/allSongs">
            <SongYouMightLike />
          </Route>
          <Route exact path="/allPlaylists">
            <ProfileSidebar />
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
