import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSongDetails } from '../../store/song';
import { deleteSong } from '../../store/song';
import { Link } from 'react-router-dom';
import SongEditForm from './SongEditForm';

const SongIndexItem = ({ song }) => {
    const { id } = useParams();
    const singleSong = useSelector(state => state.songs.singleSong);
    const currentUser = useSelector(state => state.session.user)

    const dispatch = useDispatch()
    const history = useHistory()
    const [showEdit, setShowEdit] = useState(false)

    useEffect(() =>{
        dispatch(getSongDetails(id))
    }, [id])


    const removeSong = () => {
        dispatch(deleteSong(id))
        .then(() => history.push('/home'))
      };



    return (
<div className="song-detail-lists">
        <div>
          <center>
            <img className="titleImage"alt="" src={singleSong?.imageUrl} />
          </center>
            <h2 className="title">{singleSong?.title}</h2>
            <p>{singleSong?.description}</p>

            <button className="detailButton1" onClick={removeSong}>Delete Song</button>
            <button className="detailButton2" onClick={() => setShowEdit(!showEdit)}>Edit Song</button>
          </div>
          {showEdit && (
            <SongEditForm />
          )}
</div>
      );
    };

export default SongIndexItem
