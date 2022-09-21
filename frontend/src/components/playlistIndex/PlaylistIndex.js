import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { getPlaylistsByArtist } from '../../store/playlist';

const PlaylistIndex = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getPlaylistsByArtist(currentUser))
    }, [])

  const playlistObject = useSelector(state => state.playlists)
  const playlists = Object.values(playlistObject);


  const resetBookData = (e) => {
    e.preventDefault();
    dispatch(resetBook())
  };

  return (
    <section>
      <ul>
        {
          books.map(book => (
            <BookIndexItem
              book={book}
              key={book.id}
            />
          ))
        }
      </ul>
      <Link to="/books/new">Add New Book</Link>
      <button onClick={resetBookData}>Reset Book Data</button>
    </section>
  );
}

export default BooksIndex;
import { getPlaylistsByArtist } from '../../store/playlist';
