import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSongDetails } from '../../store/song';
import { getPlaylistsByArtist } from '../../store/playlist';
import { deleteSong } from '../../store/song';
import { createPlaylistSong } from '../../store/playlistSong';
import SongEditForm from './SongEditForm';
import { getAudio } from '../../store/songPlayer';
import { getSongs } from '../../store/song';
import CommentForm from './CommentForm';
import CommentEditForm from '../CommentEditForm';
import { getComments, deleteComment } from '../../store/comment';
import { toast } from 'react-hot-toast';
import * as followActions from '../../store/follow'
import * as songLikeActions from '../../store/songLike'
import FollowButton from '../FollowButton';

const SongIndexItem = ({ song }) => {
  const { id } = useParams();
  const singleSong = useSelector(state => state.songs.singleSong);
  const songObject = useSelector(state => state.songs.allSongs)
  const songs = Object.values(songObject);
  const user = useSelector(state => state.session.user)
  const likeObj = useSelector(state => state.songLike.allLikeSongs)
  const likes = Object.values(likeObj)
  const likesFilter = likes?.filter(like => like.userId === user.id)
  const like = likesFilter[0]
  const commentsObj = useSelector(state => state.comment.allComments)
  const allComments = Object.values(commentsObj)
  const comments = allComments.filter(comment => comment.songId === singleSong.id)
  const playlistObject = useSelector(state => state.playlist.allPlaylists)
  const playlists = Object.values(playlistObject);
  const followingsObj = useSelector((state) => (state.follow?.following))
  const followings = Object.values(followingsObj)
  const filtered = followings.filter(follow => follow.followerId === user.id)
  const filtered2 = filtered.filter(follow => follow.followedId === singleSong.Artist?.id)
  const filtered3 = songs.filter(song => song.userId === singleSong.Artist?.id)
  const dispatch = useDispatch()
  const history = useHistory()

  const [showEdit, setShowEdit] = useState(false)
  const [commentBody, setCommentBody] = useState("");
  const [captionBody, setCaptionBody] = useState("");
  const [showEdit2, setShowEdit2] = useState(false);
  const [editId, setEditId] = useState(-1);
  const [editId2, setEditId2] = useState(-1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [following, setFollowing] = useState(filtered2.length > 0)
  const [playlistDrop, setPlaylistDrop] = useState(false)


  const playSong = async (id) => {
    await dispatch(getAudio(id))
  }

  useEffect(() => {
    dispatch(getSongs())
    dispatch(songLikeActions.getLikeSongs())
  }, [dispatch])

  const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
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
      .then(() => history.push(`/users/${user.id}`))
  };

  const handlePlaylistDrop = () => {
    if (playlistDrop) setPlaylistDrop(false)
    else setPlaylistDrop(true)
  }

  const handlePlaylistAdd = async (playlistId, songId) => {

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

  const handleLikeSong = async (singleSong) => {
    console.log(likesFilter.length)
    if (!user) return toast.error("Please log-in to like posts")
    if (!likesFilter.length > 0) {

      const payload = {
        songId: singleSong?.id,
        userId: user.id
      }

      await dispatch(songLikeActions.createLikeSong(payload))
      await dispatch(songLikeActions.getLikeSongs())
    }
    else {

      console.log("this is the id", like.id)
      await dispatch(songLikeActions.deleteLikeSong(like.id))
      await dispatch(songLikeActions.getLikeSongs())
    }
  }

  useEffect(() => {
    if (user) {
      dispatch(followActions.followingList(user.id))
        .then(() => setIsLoaded(true))
    }
  }, [dispatch, isLoaded]);



  return (
    <div className="song-detail-lists">
      <div>
        <div className='title-image-wrapper'>
          <div className='title-wrapper'>
            <h5 className="title">{singleSong?.title}</h5>
            <h6 className='sub-title'>{singleSong.Artist?.username}</h6>
          </div>
          <center>
            <img className="title-image" alt="" src={singleSong?.imageUrl} />
          </center>
        </div>
        <div className="detailButtons">
          <button className={likesFilter.length > 0 ? "detail-button-liked" : "detail-button-unliked"} onClick={() => handleLikeSong(singleSong)}><i id ={likesFilter.length > 0 ? "liked" : "un-liked"} class="fa-solid fa-heart"></i> Like</button>
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
        <div className={singleSong.userId === user.id ? "playlist-dropdown-user" : "playlist-dropdown-nonuser"}>
          {playlists?.map(playlist => (
            <li onClick={() => handlePlaylistAdd(playlist.id, singleSong.id)} className='playlistAdd-item'>
              <i class="fa-solid fa-plus"></i> Add to {playlist.name}
            </li>
          ))}
        </div>
      )}
      <div className="textarea-comments">
        <CommentForm
          songId={singleSong?.id} />
      </div>
      <hr className='scroll-divider' />
      <div className='comment-follow-wrapper'>
        <div className='follow-wrapper'>
          <div>
            <img className='follow-profile-picture' alt='' src={singleSong.Artist?.imageUrl} />
          </div>
          <Link className='follow-username' to={`/users/${singleSong.Artist?.id}`}>
            {singleSong.Artist?.username}
          </Link>
          <div className='follow-metrics'>
            <i class="fa-solid fa-user-group"></i> {Math.round(getRandomArbitrary(1, 100)) + 'k'}
            &nbsp;
            &nbsp;
            &nbsp;
            <i class="fa-solid fa-podcast"></i> {filtered3.length}
          </div>
          {user.id !== singleSong.Artist?.id && <FollowButton artist={singleSong.Artist} />}
        </div>
        <div className="scroll-body">
          {comments.length > 0 && <div className='comment-summary'><i class="fa-solid fa-message"></i> {comments.length} comments</div>}
          {comments.length > 0 && <hr className='comment-divider' />}
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
    </div>
  );
};

export default SongIndexItem
