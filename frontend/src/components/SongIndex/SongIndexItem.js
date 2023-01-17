import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSongDetails } from '../../store/song';
import { getPlaylistsByArtist } from '../../store/playlist';
import { deleteSong } from '../../store/song';
import { addSongToPlaylist, createPlaylistSong } from '../../store/playlistSong';
import { Link } from 'react-router-dom';
import SongEditForm from './SongEditForm';
import { getAudio } from '../../store/songPlayer';
import CommentForm from './CommentForm';
import CommentEditForm from '../CommentEditForm';
import { getComments, deleteComment } from '../../store/comment';
import { toast } from 'react-hot-toast';

const SongIndexItem = ({ song }) => {
  const { id } = useParams();
  const singleSong = useSelector(state => state.songs.singleSong);
  const user = useSelector(state => state.session.user)
  const commentsObj = useSelector(state => state.comment.allComments)
  const allComments = Object.values(commentsObj)
  const comments = allComments.filter(comment => comment.songId === singleSong.id)
  const playlistObject = useSelector(state => state.playlist.allPlaylists)
  const playlists = Object.values(playlistObject);

  const dispatch = useDispatch()
  const history = useHistory()
  const [showEdit, setShowEdit] = useState(false)
  const [commentBody, setCommentBody] = useState("");
  const [captionBody, setCaptionBody] = useState("");
  const [showEdit2, setShowEdit2] = useState(false);
  const [editId, setEditId] = useState(-1);
  const [editId2, setEditId2] = useState(-1);
  const [playlistDrop, setPlaylistDrop] = useState(false)


  const playSong = async (id) => {
    await dispatch(getAudio(id))
  }

  useEffect(() => {
    if (user) dispatch(getPlaylistsByArtist(user.id))
  }, [user, dispatch])

  useEffect(() => {
    dispatch(getSongDetails(id))
  }, [id])

  useEffect(() => {
    if (singleSong) dispatch(getComments(singleSong.id))
  }, [singleSong, dispatch])


  const removeSong = () => {
    dispatch(deleteSong(id))
      .then(() => history.push('/home'))
  };

  const handlePlaylistDrop = () => {
    if (playlistDrop) setPlaylistDrop(false)
    else setPlaylistDrop(true)
  }

  const handlePlaylistAdd = async (playlistId, songId) => {
    console.log("this is the playlistSong pair", playlistId, songId)

    const payload = {
      playlistId,
      songId
    }

    await dispatch(createPlaylistSong(payload))
    return toast.success('Added to Playlist!')
  }

  const handleDelete = async (commentId, songId) => {
    await dispatch(deleteComment(commentId, songId))
    await dispatch(getComments(singleSong.id))
  };



  return (
    <div className="song-detail-lists">
      <div>
        <center>
          <img className="titleImage" alt="" src={singleSong?.imageUrl} />
        </center>

        <h5 className="title">{singleSong?.title}</h5>
        <div className="detailButtons">
          {singleSong?.userId === user?.id && <button className="detailButton1" onClick={removeSong}>Delete Song</button>}
          <button className={singleSong?.userId === user?.id ? "detailButton4" : "detailButton5"} onClick={() => playSong(singleSong.id)}>Play Song</button>
          {singleSong?.userId === user?.id && <button className="detailButton2" onClick={() => setShowEdit(!showEdit)}>Edit Song</button>}
          <button className="detailButton2" onClick={() => handlePlaylistDrop()}><i class="fa-solid fa-ellipsis"></i> More</button>
        </div>
      </div>
      {showEdit && (
        <SongEditForm />
      )}
      {playlistDrop && (
        <div className="playlist-dropdown">
          {playlists?.map(playlist => (
            <li onClick={() => handlePlaylistAdd(playlist.id, singleSong.id)}className='playlistAdd-item'>
              <i class="fa-solid fa-plus"></i> Add to {playlist.name}
            </li>
          ))}
        </div>
      )}
      <div className="textarea-comments">
        <CommentForm
          songId={singleSong?.id} />
      </div>
      <div className="scroll-body">
        <div className='comment-summary'><i class="fa-solid fa-message"></i> {comments.length} comments</div>
        <hr className='comment-divider' />
        {comments?.map((comment) => (
          <div className="comment-wrapper2">
            <div className='two-item-comment'>
              <div className="item-header">
                <img
                  src={comment.User.imageUrl}
                  alt="Profile"
                  className="profileImage2"
                ></img>
              </div>
              <div className="comment-body">
                <div className='comment-username'>{comment.User.username}</div>
                <div className='comment-text'>{comment.body}</div>
              </div>
            </div>
            {comment?.userId === user?.id && (
              <div className="comment-buttons">
                <div
                  className="detail-button1"
                  onClick={() => handleDelete(comment.id, singleSong.id)}
                >
                  <div className='delete-button'>Delete</div>
                </div>
                <div
                  id={comment.id}
                  value={comment.id}
                  className="detail-button2"
                  onClick={() => {
                    if (editId === comment.id) {
                      setEditId(-1);
                      setEditId("");
                      return;
                    }
                    setEditId(comment.id);
                    setCommentBody(comment.body);
                  }}
                >
                  <div className='edit-button'>Edit</div>
                </div>
              </div>
            )}
            <div className="editform">
              {editId === comment.id && (
                <CommentEditForm
                  className="comment-edit-form"
                  songId={singleSong.id}
                  comment={comment}
                  setCommentBody={setCommentBody}
                  commentBody={commentBody}
                  setEditId={setEditId}
                />
              )}
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default SongIndexItem
