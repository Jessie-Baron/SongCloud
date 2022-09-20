import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { remove } from '../store/playlist';

const PlaylistIndexItem = ({ playlist }) => {
    const dispatch = useDispatch()

    return (
        <li>
            <Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
            <Link to={`/playlists/${playlist.id}/edit`}>Edit</Link>
            <button onClick={remove}>Delete</button>
        </li>
      );
    };

export default PlaylistIndexItem
