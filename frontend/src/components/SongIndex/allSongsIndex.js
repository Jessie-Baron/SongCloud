import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { getSongs } from '../../store/song';
import './SongsIndex.css'

const AllSongsIndex = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch])

  const songObject = useSelector(state => state.songs.allSongs)
  console.log("this is the songObject",songObject)
  const songs = Object.values(songObject);
  console.log("This is the songs array",songs)

  return (
    <div>
    <h2>All the Songs</h2>
    <h3>What are you in the mood for?</h3>
    <div className='songSection'>
        {
          songs?.map(song => (
            <div className='box'>
              <li>
                {song.imageUrl}
              </li>
               <Link className="song" to={`/songs/${song.id}`}>{song.title}</Link>
               </div>
          ))
        }
    </div>
    </div>
  );
}

export default AllSongsIndex;
