import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSongDetails } from '../../store/song';
import { deleteSong } from '../../store/song';
import { Link } from 'react-router-dom';

const SongIndexItem = ({ song }) => {
    const { id } = useParams();
    console.log("this is the song Id", id)
    const singleSong = useSelector(state => state.songs.singleSong);
    console.log("this is the song", singleSong)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() =>{
        dispatch(getSongDetails(id))
    }, [id])


    const removeSong = () => {
        dispatch(deleteSong(id))
        .then(() => history.push('/'))
      };

      const editForm = () => {
        const form = document.getElementsByClassName(`form`)[0];
        form.toggleAttribute('hidden');
      }


    return (
<div className="song-detail-lists">
        <div>
            <h2>{singleSong?.title}</h2>
            <ul>
                {singleSong?.song?.map(song => (
                    <div>
                    <li>{song.imageUrl}</li>
                    <li>{song.description}</li>
                    </div>
                ))}
            </ul>
            <button onClick={removeSong}>Delete Song</button>
            <button onClick={removeSong}>Add Song to Playlist</button>
            <button onClick={editForm}>Edit Song</button>
          </div>
</div>
      );
    };

export default SongIndexItem
