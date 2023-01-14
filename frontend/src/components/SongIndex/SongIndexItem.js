import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSongDetails } from '../../store/song';
import { deleteSong } from '../../store/song';
import { Link } from 'react-router-dom';
import SongEditForm from './SongEditForm';
import { getAudio } from '../../store/songPlayer';
import CommentForm from './CommentForm';
import CommentEditForm from '../CommentEditForm';
import { getComments, deleteComment } from '../../store/comment';

const SongIndexItem = ({ song }) => {
  const { id } = useParams();
  const singleSong = useSelector(state => state.songs.singleSong);
  const user = useSelector(state => state.session.user)
  const commentsObj = useSelector(state => state.comment.allComments)
  const allComments = Object.values(commentsObj)
  const comments = allComments.filter(comment => comment.songId === singleSong.id)

  const dispatch = useDispatch()
  const history = useHistory()
  const [showEdit, setShowEdit] = useState(false)
  const [commentBody, setCommentBody] = useState("");
  const [captionBody, setCaptionBody] = useState("");
  const [showEdit2, setShowEdit2] = useState(false);
  const [editId, setEditId] = useState(-1);
  const [editId2, setEditId2] = useState(-1);
  const [playlistAdd, setPlaylistAdd] = useState(false)


  const playSong = async (id) => {
    await dispatch(getAudio(id))
  }

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

  const handlePlaylistAdd = () => {
    if(playlistAdd) setPlaylistAdd(false)
    else setPlaylistAdd(true)
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
          <button className="detailButton4" onClick={() => playSong(singleSong.id)}>Play Song</button>
          {singleSong?.userId === user?.id && <button className="detailButton2" onClick={() => setShowEdit(!showEdit)}>Edit Song</button>}
          <button className="detailButton2" onClick={() => handlePlaylistAdd()}><i class="fa-solid fa-ellipsis"></i> More</button>
        </div>
      </div>
      {showEdit && (
        <SongEditForm />
      )}
      {playlistAdd && (
        <div>placeholder</div>
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
