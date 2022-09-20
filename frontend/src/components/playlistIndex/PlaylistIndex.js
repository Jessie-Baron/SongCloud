import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPlaylistByUser } from '../../store/playlist';
import './PlaylistIndex.css'

const PlaylistIndex = () => {
    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.session.user)
    const playlist = dispatch(getPlaylistByUser(currentUser))
    console.log("this is the playlist", playlist)

    const playlistObject = useSelector(state => state.playlist)
    console.log("this is the playlistObj", playlistObject)
    console.log("this is the currentUser Object", currentUser)

    return (
        <div className='playlistSection'>
          {/* <ul>
            {
              playlist.map(playlist => (
                <playlistIndexItem
                  playlist={playlist}
                  key={playlist.id}
                />
              ))
            }
          </ul> */}
          <Link to="/playlist/new">Add New Playlist</Link>
        </div>
      );
}

export default PlaylistIndex
