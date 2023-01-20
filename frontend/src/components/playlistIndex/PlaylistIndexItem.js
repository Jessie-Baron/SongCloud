import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPlaylistDetails } from '../../store/playlist';
import { deletePlaylist } from '../../store/playlist';
import { getAudio } from '../../store/songPlayer';
import { Link } from 'react-router-dom';

const PlaylistIndexItem = ({ playlist }) => {
    const { id } = useParams();
    // console.log("this is the id of the playlist", id)
    const singlePlaylist = useSelector(state => state.playlist.singlePlaylist);
    const user = useSelector(state => state.session.user)
    // const playlists = Object.values(playlistsObj)
    // console.log("this is the playlists array", playlists)
    // const singlePlaylist = playlists.filter(playlist => playlist.id === Number(id))[0]
    // console.log("this is the playlist", singlePlaylist)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getPlaylistDetails(id))
    }, [id])

    const playSong = async (id) => {
        await dispatch(getAudio(id))
    }

    const removePlaylist = () => {
        dispatch(deletePlaylist(id))
            .then(() => history.push('/home'))
    };

    const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
    }


    return (
        <div className="playlist-detail-lists">
            <div>
                <center>
                    <img className="titleImage" alt="" src={singlePlaylist?.imageUrl} />
                </center>

                <h5 className="title-playlist">{singlePlaylist?.name}</h5>
                <div className='detailButtons-playlist'>
                    {singlePlaylist?.userId === user?.id && <button className="detailButton3" onClick={removePlaylist}>Delete Playlist</button>}
                </div>

                {singlePlaylist?.Songs?.map((song, idx) => (
                    <div onClick={() => playSong(song.id)} className='playlist-line-item'>
                        <div className='playlist-item-left'>
                            <p>
                                <img className='playlist-item-image' src={song.imageUrl} alt="song cover" />&nbsp;&nbsp;&nbsp;{idx + 1}
                            </p>
                            <p className='users-name-playlist-item'>{song.Artist?.username} - </p>
                            <Link className='song-title-playlist-item' to={`/songs/${song.id}`}>{song.title}</Link>
                        </div>
                        <div className='playlist-item-right'>
                            <p className='users-name'>
                                <i class="fa-solid fa-play"></i>
                                &nbsp;
                                {Math.round(getRandomArbitrary(1, 100)) + 'k'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlaylistIndexItem
