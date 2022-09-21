import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { getPlaylistsByArtist } from '../../store/playlist';
import './PlaylistIndex.css'

const PlaylistIndex = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getPlaylistsByArtist(currentUser.id))
    }, [])

  const playlistObject = useSelector(state => state.playlist)
  console.log(playlistObject)
  const playlists = Object.values(playlistObject);
  console.log(playlists)

  return (
    <div className='playlistSection'>
        {
          playlists.map(playlist => (
            <div>
              <li>
                {playlist.imageUrl}
              </li>
               <h5>{playlist.name}</h5>
               </div>
          ))
        }
      <Link to="/playlists/new">Add New Playlist</Link>
    </div>
  );
}

export default PlaylistIndex;
