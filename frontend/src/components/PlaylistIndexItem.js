import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { remove } from '../store/playlist';
import { getPlaylistDetails } from '../store/playlist';

const PlaylistIndexItem = ({ playlist }) => {
    const { id } = useParams();
    console.log("this is the id of the playlist", id)
    const playlistsObj = useSelector(state => state.playlist);
    console.log("this is the playlistObj", playlistsObj)
    const playlists = Object.values(playlistsObj)
    console.log("this is the playlists array", playlists)

    const singlePlaylist = playlists.filter(playlist => playlist.id == id)[0]
    console.log("this is the playlist", singlePlaylist)

    const dispatch = useDispatch()
    dispatch(getPlaylistDetails(singlePlaylist))


    // return (
    //     <div>
    //         <h2>{singlePlaylist.name}</h2>
    //         <div className='playlistSection'>
    //     {
    //       singlePlaylist.map(song => (
    //         <div className='box'>
    //           <li>
    //             {playlist.imageUrl}
    //           </li>
    //            <Link className="playlist" to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
    //            </div>
    //       ))
    //     }
    //       </div>
    // </div>
    //   );
    };

export default PlaylistIndexItem
