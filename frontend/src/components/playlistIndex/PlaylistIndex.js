import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { getPlaylistsByArtist } from '../../store/playlist';
import './PlaylistIndex.css'

const PlaylistIndex = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    console.log("this is the currentUser", currentUser)

    useEffect(() => {
        dispatch(getPlaylistsByArtist(currentUser.id))
    }, [currentUser.id, dispatch])

  const playlistObject = useSelector(state => state.playlist.allPlaylists)
  console.log("this is the playlistObject",playlistObject)
  const playlists = Object.values(playlistObject);
  console.log("This is the playlists array",playlists)

  return (
    <div>
    <h2>{currentUser.firstName}'s Playlists</h2>
    <h3>Pick up where you left off!</h3>
    <div className='playlistSection'>
        {
          playlists.map(playlist => (
            <div className='box'>
              <li>
                {playlist.imageUrl}
              </li>
               <Link className="playlist" to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
               </div>
          ))
        }
      <Link to="/playlists/new">Add New Playlist</Link>
    </div>
    </div>
  );
}

export default PlaylistIndex;
