import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const PlaylistIndex = () => {
    const playlistObject = useSelector(state => console.log("this is state", state))
    console.log(playlistObject)
    const playlist = Object.values(playlistObject);
    const dispatch = useDispatch()

    return (
        <section>
          <ul>
            {
              playlist.map(playlist => (
                <playlistIndexItem
                  playlist={playlist}
                  key={playlist.id}
                />
              ))
            }
          </ul>
          <Link to="/playlist/new">Add New Playlist</Link>
        </section>
      );
}

export default PlaylistIndex
