import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import { getSongs } from '../../store/song';
import { getAudio } from '../../store/songPlayer';
import './SongsIndex.css'
import { getComments } from '../../store/comment';
import { createComment } from '../../store/comment';

const CommentForm = (songId) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getComments())
    }, [dispatch])

    const user = useSelector((state) => state.session.user);
    console.log("this is the current user", user)
    const newSongId = (Object.values(songId)[0])
    const [body, setBody] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const onSubmit = async (e) => {
        // Prevent the default form behavior so the page doesn't reload.
        e.preventDefault();
        setHasSubmitted(true);

        // Create a new object for the song form information.
        const commentForm = { body };

        await dispatch(createComment(newSongId, commentForm))
        await dispatch(getComments(newSongId))

        // Reset the form state.
        setBody("");
        setValidationErrors([]);
        setHasSubmitted(false);
    };

    return (
        <form id="form1" noValidate onSubmit={onSubmit}>
            <ul>
                {validationErrors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <div className="comment-profile-image-wrapper">
                <img className="comment-profile-image" alt="profile" src={user.imageUrl}></img>
                {user && <input
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required={true}
                    placeholder="Write a comment"
                />}
            </div>
            {/* {user && <button className={!body || body.length > 300 ? 'comment-button' : 'comment-button-active'} disabled={!body || body.length > 300} type="submit">Respond</button>} */}
            {!user && <div className="comment-signin-wrapper"><NavLink to='/' className="signin-text-comments">Please log in to comment</NavLink></div>}
        </form>
    );
}

export default CommentForm;
