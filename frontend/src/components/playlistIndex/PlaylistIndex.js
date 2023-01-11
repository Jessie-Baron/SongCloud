import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import { getPlaylistsByArtist } from '../../store/playlist';
import { getAudio, getPlaylistAudio } from '../../store/songPlayer';
import './PlaylistIndex.css'

const PlaylistIndex = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.session.user)
  useEffect(() => {
    if (currentUser) dispatch(getPlaylistsByArtist(currentUser.id))
  }, [currentUser, dispatch])

  const playlistObject = useSelector(state => state.playlist.allPlaylists)
  const playlists = Object.values(playlistObject);
  const sample = playlists.slice(0, 5)
  const sample2 = playlists.slice(6, 11)
  const [carousel, setCarousel] = useState(true)

  const playSong = async (id) => {
    await dispatch(getPlaylistAudio(id))
  }

  return (
    <div className='outer1'>
      <h2 className='userPlay'>Your Playlists</h2>
      <div className='playlistSection'>
        <i id="left-arrow" onClick={() => setCarousel(true)} class="fa-solid fa-chevron-left"></i>
        {carousel &&
          sample?.map(playlist => (
            <div className='box'>
              <img className="imagesPlaylist" alt="" onClick={() => playSong(playlist.id)} src={`${playlist.imageUrl}`} />
              <Link className="playlist" to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
            </div>
          ))
        }
        {!carousel &&
          sample2?.map(playlist => (
            <div className='box'>
              <img className="imagesPlaylist" alt="" onClick={() => playSong(playlist.id)} src={`${playlist.imageUrl}`} />
              <Link className="playlist" to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
            </div>
          ))
        }
        <i id="right-arrow" onClick={() => setCarousel(false)} class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
}

export default PlaylistIndex;
