import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { getPlaylistsByArtist } from '../../store/playlist';
import { getAudio, getPlaylistAudio } from '../../store/songPlayer';
import './PlaylistIndex.css'

const PlaylistIndex = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    useEffect(() => {
        if(currentUser) dispatch(getPlaylistsByArtist(currentUser.id))
    }, [currentUser, dispatch])

  const playlistObject = useSelector(state => state.playlist.allPlaylists)
  const playlists = Object.values(playlistObject);

  const playSong = async (id) => {
    await dispatch(getPlaylistAudio(id))
  }

  return (
    <div className='outer1'>
    <h2 className='userPlay'>Your Playlists</h2>
    <div className='playlistSection'>
        {
          playlists?.map(playlist => (
            <div className='box'>
              <img className="imagesPlaylist" alt="" onClick={() => playSong(playlist.id)} src={`${playlist.imageUrl}`} />
              <Link className="playlist" to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
               </div>
          ))
        }
        <div>
        <button className="playlistForm" ><Link className="playlistForm-text" to="/playlists">Add New Playlist</Link></button>
      </div>
    </div>
    </div>
  );
}

export default PlaylistIndex;
