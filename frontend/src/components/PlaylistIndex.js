import { Link } from 'react-router-dom';
import PopUpPlaylist from './PopUpPlaylist'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const PlaylistIndex = () => {
    const playlistObject = useSelector(state => state.books)
    const playlist = Object.values(playlistObject);
    const dispatch = useDispatch()
}
