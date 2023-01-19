import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import { getSongs } from '../../store/song';
import { getAudio } from '../../store/songPlayer';
import './SongsIndex.css'

const ThreeSongs = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSongs())
    }, [dispatch])

    const playSong = async (id) => {
        await dispatch(getAudio(id))
    }

    const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    const songObject = useSelector(state => state.songs.allSongs)
    const songs = Object.values(songObject);
    const sample = songs.slice(0, 3)

    return (
        <div className='sidebar-songs'>
            <div className='songFiller-sidebar'>
                {
                    sample?.map(song => (
                        <div onClick={() => playSong(song.id)} className='sidebar-box'>
                            <img className="images-sidebar" alt="" onClick={() => playSong(song.id)} src={`${song.imageUrl}`} />
                            <div className='sidebar-song-and-artist'>
                                <Link className="song-sidebar" to={`/songs/${song.id}`}>{song.title}</Link>
                                <p className='users-name'>
                                    {song?.Artist?.username}
                                </p>
                                <p className='users-name'>
                                    <i class="fa-solid fa-play"></i>
                                    &nbsp;
                                    {Math.round(getRandomArbitrary(1, 100)) + 'k'}
                                    &nbsp;
                                    &nbsp;
                                    <Link to={`/songs/${song.id}`}><i class="fa-solid fa-message"></i></Link>
                                    &nbsp;
                                    {song.Comments?.length}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ThreeSongs;
