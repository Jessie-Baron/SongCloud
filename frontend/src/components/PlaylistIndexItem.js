import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPlaylistDetails } from '../store/playlist';
import { deletePlaylist } from '../store/playlist';

const PlaylistIndexItem = ({ playlist }) => {
    const { id } = useParams();
    // console.log("this is the id of the playlist", id)
    const singlePlaylist = useSelector(state => state.playlist.singlePlaylist);
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
        dispatch(deletePlaylist(singlePlaylist.id))
        history.push('/')
      };


    return (
<div className="playlist-detail-lists">
        <div>
            <h2>{singlePlaylist?.name}</h2>
            <ul>
                {singlePlaylist?.Songs?.map(song => (
                    <li>{song.title}</li>
                ))}
            </ul>
            <button onClick={removePlaylist}>Delete Playlist</button>
          </div>
</div>
      );
    };

export default PlaylistIndexItem
