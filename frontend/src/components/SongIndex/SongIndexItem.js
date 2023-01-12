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
          <button className="detailButton1" onClick={removeSong}>Delete Song</button>
          <button className="detailButton4" onClick={() => playSong(singleSong.id)}>Play Song</button>
          <button className="detailButton2" onClick={() => setShowEdit(!showEdit)}>Edit Song</button>
        </div>
      </div>
      {showEdit && (
        <SongEditForm />
      )}
      <div className="textarea-comments">
        <CommentForm
          songId={singleSong?.id} />
      </div>
      <div className="scroll-body">
        {comments?.map((comment) => (
          <div className="comment-wrapper2">
            <div className="item-header">
              <img
                src={comment.User.image_url}
                alt="Profile"
                className="profileImage2"
              ></img>
              <div>{comment.User.username}</div>
            </div>

            <div className="comment-body">{comment.body}</div>
            {comment?.userId === user?.id && (
              <div className="comment-buttons">
                <div
                  className="detailButton1"
                  onClick={() => handleDelete(comment.id, singleSong.id)}
                >
                  <div className='delete-button'>Delete</div>
                </div>
                <div
                  id={comment.id}
                  value={comment.id}
                  className="detailButton2"
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
            {/* <div className="editform">
              {editId === comment.id && (
                <CommentEditForm
                  className="comment-edit-form"
                  songId={song.id}
                  comment={comment}
                  setCommentBody={setCommentBody}
                  commentBody={commentBody}
                  setEditId={setEditId}
                />
              )}
            </div> */}
          </div>

        ))}
      </div>
    </div>
  );
};

export default SongIndexItem
