import React from 'react'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {getRepos, setPage, setUserData, setUserError, setUserName, toggleIsFetching} from "../../store/reducers/user";
import logo from '../../assets/Logo.png'
import './Header.css'


export const Header = () => {
    const dispatch = useDispatch()
    const {name} = useSelector(state => state.user)

    const inputOnChangeHandler = (e) => {
        dispatch(setUserName(e.target.value))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(toggleIsFetching(true))

        axios.get(`https://api.github.com/users/${name}`).then(res => {
            dispatch(toggleIsFetching(false))
            dispatch(setUserData(res.data))
        }).catch(error => {
            dispatch(setUserError())
            dispatch(toggleIsFetching(false))
        })

        dispatch(getRepos(1, 4, name))
        dispatch(setPage(1))
    }

    return (
        <div className='header-container header-responsive'>
            <div className='logo logo-responsive'><img src={logo} alt=""/></div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <input placeholder={'Enter GitHub username'} className='search-engine search-responsive' onChange={inputOnChangeHandler} value={name} type="text"/>
                </div>
            </form>
        </div>
    )
}