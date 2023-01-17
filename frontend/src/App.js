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
import SongYouMightLike2 from "./components/SongIndex/SongYouMightLike2";
import SongYouMightLike3 from "./components/SongIndex/SongsYouMightLike3";
import SongYouMightLike4 from "./components/SongIndex/SongsYouMightLike4";
import SongYouMightLike5 from "./components/SongIndex/SongsYouMightLike5";
import SongYouMightLike6 from "./components/SongIndex/SongsYouMightLike6";
import SongYouMightLike7 from "./components/SongIndex/SongsYouMightLike7";
import SongYouMightLike8 from "./components/SongIndex/SongsYouMightLike8";
import SongYouMightLike10 from "./components/SongIndex/SongsYouMightLike10";
import SongLibrary from "./components/SongIndex/SongLibrary"
import 'react-h5-audio-player/lib/styles.css';
import SongIndexItemNoAuth from "./components/SongIndex/SongIndexItemNoAuth";
import SplashCarousel from "./components/SplashCarousel";
import toast, { Toaster } from 'react-hot-toast';

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
            <SplashCarousel />
            <SplashSongs />
          </Route>
          <Route path="/home">
            <ProfileSidebar />
            <SongYouMightLike />
            <SongYouMightLike2 />
            <SongYouMightLike3 />
            <SongYouMightLike4 />
            <SongYouMightLike5 />
            <SongYouMightLike6 />
            <SongYouMightLike7 />
          </Route>
          <Route exact path="/library">
            <PlaylistIndex />
            <SongIndex />
            <SongYouMightLike4 />
            <SongYouMightLike8 />
            <SongYouMightLike10 />
            <SongYouMightLike2 />
          </Route>
          <Route exact path="/feed">
            <ProfileSidebar />
            <SongLibrary />
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
       <Toaster />
    </>
  );
}

export default App;
