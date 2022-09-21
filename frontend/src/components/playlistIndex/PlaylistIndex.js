import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getPlaylistByUser } from '../../store/playlist';
import './PlaylistIndex.css'

const PlaylistIndex = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    console.log("this is the users name", currentUser)

    useEffect(() => {
      dispatch(getPlaylistByUser(currentUser))
    }, [])

    const playlistObject = useSelector(state => state.playlist)
    console.log("this is the playlistObj", playlistObject)
    const playlists = Object.values(playlistObject)
    console.log("this is the playlists array", playlists)

    return (
        <div className='playlistSection'>
            {
              playlists.map(playlist => (
                <div>
                <li>{playlist.imageUrl}</li>
                <h4>{playlist.name}</h4>
                </div>
              ))
            }
          <Link to="/playlist/new">Add New Playlist</Link>
        </div>
      );
}

export default PlaylistIndex
