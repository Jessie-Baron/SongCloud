import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const PlaylistIndexItem = ({ playlist }) => {
    const dispatch = useDispatch()

    return (
        <li>
            playlist.imageUrl
            playlist.name
        </li>
      );
    };
