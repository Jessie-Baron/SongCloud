import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPlaylistDetails } from '../../store/playlist';
import { deletePlaylist } from '../../store/playlist';
import { Link } from 'react-router-dom';

const PlaylistIndexItemNoAuth = ({ playlist }) => {
    const { id } = useParams();
    // console.log("this is the id of the playlist", id)
    const singlePlaylist = useSelector(state => state.playlist.singlePlaylist);
    const currentUser = useSelector(state => state.session.user)
    // const playlists = Object.values(playlistsObj)
    // console.log("this is the playlists array", playlists)
    // const singlePlaylist = playlists.filter(playlist => playlist.id === Number(id))[0]
    // console.log("this is the playlist", singlePlaylist)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() =>{
        dispatch(getPlaylistDetails(id))
    }, [id])


    const removePlaylist = () => {
        dispatch(deletePlaylist(id))
        .then(() => history.push('/home'))
      };


    return (
<div className="playlist-detail-lists">
        <div>
        <center>
            <img className="titleImage"alt="" src={singlePlaylist?.imageUrl} />
        </center>
            <h2 className="title">{singlePlaylist?.name}</h2>
                {singlePlaylist?.Songs?.map(song => (
                    <p>{song.title}<button className="playSongButton">Play Song</button></p>
                ))}
          </div>
</div>
      );
    };

export default PlaylistIndexItemNoAuth
