import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import * as fastForwardActions from "../store/song";
import * as followActions from '../store/follow'
import './SongIndex/SongsIndex.css'



const FollowButton = ({song}) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const user = useSelector((state) => state.session.user);
    const followingsObj = useSelector((state) => (state.follow?.following))
    const followings = Object.values(followingsObj)
    const filtered = followings.filter(follow => follow.followerId === user.id && follow.followedId === song.Artist?.id)
    console.log("this is filtered", filtered)
    const [following, setFollowing] = useState(filtered.length > 0)
    console.log("this is followings", followings)
    const dispatch = useDispatch();
    console.log("this is the value of following", following)

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

        console.log("this is my follow pair", followerId, followedId)
        if (!following) {
            dispatch(followActions.follow(followerId, followedId))
              .then(() => setFollowing(true))
              console.log("this is whether or not the follow button worked", "followed")
          } else {
            dispatch(followActions.unfollow(followerId, followedId))
              .then(() => setFollowing(false))
              console.log("this is whether or not the follow button worked", "unfollowed")
          }
    }

      return (

        <div className={following ? "follow-button-followed" : "follow-button-unfollowed"} onClick={() => handleFollow(user.id, song.Artist.id)}>{!following ? <i id='user-icon-1' class="fa-solid fa-user-plus"></i> : <i id='user-icon-2' class="fa-solid fa-user-check"></i>} {!following ? "Follow" : "Following"}</div>
      )
}

export default FollowButton;
