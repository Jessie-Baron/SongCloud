import { useState, useEffect } from "react";
import { createSong } from "../../store/song";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { addSongToPlaylist } from "../../store/song";
import { getPlaylistsByArtist } from "../../store/playlist";

function SongToPlaylistForm() {
  const [playlist, setPlaylist] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const dispatch = useDispatch()
  const history = useHistory()

  const currentUser = useSelector(state => state.session.user)

  useEffect(() => {
      if(currentUser) dispatch(getPlaylistsByArtist(currentUser.id))
  }, [currentUser, dispatch])

const playlistObject = useSelector(state => state.playlist.allPlaylists)
const playlists = Object.values(playlistObject);

  const onSubmit = async (e) => {
    // Prevent the default form behavior so the page doesn't reload.
    e.preventDefault();

    await dispatch(addSongToPlaylist())
    .then(window.alert("Song Added"))

  };

  return (
    <form onSubmit={onSubmit}>
    <label>
      Choose a Playlist
      </label>
      <select>
      {playlists?.map(playlist => (
        <option>{playlist.name}</option>
      ))}
      </select>
    <button type="submit">Submit</button>
  </form>
);
}

export default SongToPlaylistForm;
