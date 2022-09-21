import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import PlaylistIndex from "./components/playlistIndex/PlaylistIndex.js";
import PlaylistIndexItem from "./components/playlistIndex/PlaylistIndexItem";
import PlaylistForm from "./components/playlistIndex/PlaylistForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <PlaylistIndex />
          </Route>
          <Route path="/playlists/:id">
            <PlaylistIndexItem />
          </Route>
          <Route path="/playlists">
            <PlaylistForm />
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
