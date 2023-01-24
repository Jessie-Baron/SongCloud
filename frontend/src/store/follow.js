import { csrfFetch } from './csrf';

const LOAD_FOLLOWING = 'followers/LOAD_FOLLOWING'
const LOAD_FOLLOWERS = 'followers/LOAD_FOLLOWERS'
const ADD_FOLLOWING = 'followers/ADD_FOLLOWING'
const REMOVE_FOLLOWING = 'followers/REMOVE_FOLLOWING'

const loadFollowing = (listOfFollowing) => ({
    type: LOAD_FOLLOWING,
    payload: listOfFollowing
})

const addFollowing = (userData) => ({
    type: ADD_FOLLOWING,
    payload: userData
})

const removeFollowing = (id) => ({
    type: REMOVE_FOLLOWING,
    payload: id
})

export const followingList = (userId) => async (dispatch) => {
    const res = await csrfFetch(`/api/followers/${userId}`)

    if (res.ok) {
        const list = await res.json()
        console.log('list', list)
        dispatch(loadFollowing(list))
        return list
    }
}

export const follow = (followerId, followedId) => async (dispatch) => {
    console.log("this is the thunk pair", followerId, followedId)
    const res = await csrfFetch('/api/followers', {
        method: 'POST',
        body: JSON.stringify({
            followerId,
            followedId
        })
    })

    console.log("this is the thunk response", res)

    if (res.ok) {
        const followData = await res.json()
        dispatch(addFollowing(followData))
        return followData
    } else if (res.status < 500) {
        const data = await res.json()
        if (data.errors) {
            return data.errors
        }
    } else {
        return ['An error occured. Please try again.']
    }
}

export const unfollow = (followerId, followedId) => async (dispatch) => {
    const res = await csrfFetch('/api/followers', {
        method: 'DELETE',
        body: JSON.stringify({
            followerId,
            followedId
        })
    })

    if (res.ok) {
        const followData = await res.json()
        console.log('followData', followData)
        dispatch(removeFollowing(followData))
        return followData
    } else if (res.status < 500) {
        const data = await res.json()
        if (data.errors) {
            return data.errors
        }
    } else {
        return ['An error occured. Please try again.']
    }
}

const initialState = {
    followers: {},
    following: {}
}

export default function followReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case LOAD_FOLLOWING:
            newState = Object.assign({}, state);
            newState.following = { ...action.payload };
            return newState;
        case ADD_FOLLOWING:
            newState = Object.assign({}, state);
            newState.following[action.payload.id] = { ...action.payload }
            return newState
        case REMOVE_FOLLOWING:
            return {
                ...state,
                following: { ...action.payload }
            }
        default:
            return state;
    }
}
