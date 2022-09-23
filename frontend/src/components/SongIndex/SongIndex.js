import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { getSongsByUser } from '../../store/song';
import './SongsIndex.css'

const SongIndex = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)
    console.log("this is the currentUser", currentUser)

    useEffect(() => {
        if(currentUser) dispatch(getSongsByUser(currentUser.id))
    }, [currentUser, dispatch])

  const songObject = useSelector(state => state.songs.allSongs)
  console.log("this is the songObject",songObject)
  const songs = Object.values(songObject);
  console.log("This is the songs array",songs)

  return (
    <div>
    <h2>{currentUser?.firstName}'s Songs</h2>
    <div className='songSection'>
        {
          songs?.map(song => (
            <div className='box'>
                <img className="images" alt="" src={`${song.imageUrl}`} />
               <Link className="song" to={`/songs/${song.id}`}>{song.title}</Link>
               </div>
          ))
        }
      <Link className="songForm" to="/songs">Add New Song</Link>
    </div>
    </div>
  );
}

export default SongIndex;
