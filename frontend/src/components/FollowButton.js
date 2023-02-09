import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import * as fastForwardActions from "../store/song";
import * as followActions from '../store/follow'
import './SongIndex/SongsIndex.css'



const FollowButton = ({artist}) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const user = useSelector((state) => state.session.user);
    const followingsObj = useSelector((state) => (state.follow?.following))
    const followings = Object.values(followingsObj)
    const filtered = followings.filter(follow => follow.followerId === user.id && follow.followedId === artist?.id)
    const [following, setFollowing] = useState(filtered.length > 0)
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
          dispatch(followActions.followingList(user.id))
          .then(() => setIsLoaded(true))
        }
      }, [dispatch, isLoaded]);

      useEffect(() => {
        if (isLoaded) {
        setFollowing(filtered.length > 0)
        }
      })

      const handleFollow = (followerId, followedId) => {

        if (!following) {
            dispatch(followActions.follow(followerId, followedId))
              .then(() => setFollowing(true))
          } else {
            dispatch(followActions.unfollow(followerId, followedId))
              .then(() => setFollowing(false))
          }
    }

      return (

        <div className={following ? "follow-button-followed" : "follow-button-unfollowed"} onClick={() => handleFollow(user.id, artist.id)}>{!following ? <i id='user-icon-1' class="fa-solid fa-user-plus"></i> : <i id='user-icon-2' class="fa-solid fa-user-check"></i>} {!following ? "Follow" : "Following"}</div>
      )
}

export default FollowButton;
