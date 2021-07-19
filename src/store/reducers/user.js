import axios from "axios";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_REPO = 'SET_USER_REPO'
const SET_USER_NAME = 'SET_USER_NAME'
const SET_PAGE = 'SET_PAGE'
const SET_USER_ERROR = 'SET_USER_ERROR'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
    user: {},
    repo: [],
    name: '',
    page: 1,
    userError: false,
    isFetching: false
}


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, user: {...action.payload}, userError: false}
        case SET_USER_REPO:
            return {...state, repo: [...action.payload]}
        case SET_USER_NAME:
            return {...state, name: action.payload}
        case SET_USER_ERROR:
            return {...state, userError: true}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.payload}
        case SET_PAGE:
            return {...state, page: action.payload}

        default:
            return {...state}

    }
}

export const setUserName = (name) => {
    return {type: SET_USER_NAME, payload: name}
}

export const setUserData = (data) => {
    return {
        type: SET_USER_DATA,
        payload: data
    }
}

export const setUserRepo = (data) => {
    return {
        type: SET_USER_REPO,
        payload: data
    }
}

export const setUserError = () => {
    return {
        type: SET_USER_ERROR
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: isFetching
    }
}

export const setPage = (page) => {
    return {
        type: SET_PAGE,
        payload: page
    }
}

export const getRepos = (page = 1, limit = 4, nick) => {
    return (dispatch) => {
        axios.get(`https://api.github.com/users/${nick}/repos`, {
            params: {
                page: page,
                per_page: limit
            }
        }).then(res => dispatch(setUserRepo(res.data)))
    }
}

