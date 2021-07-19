import React from 'react'
import {useSelector} from "react-redux";
import {rounding} from "../../utils/rounding";
import ifollowers from '../../assets/icon-visability-shared.png'
import ifollowing from '../../assets/icon-visability-provate.png'
import './Profile.css'


export const Profile = () => {
    const {avatar_url, login, name, followers, following, html_url} = useSelector(state => state.user.user)
    return (
        <div className='profile profile-responsive'>
            <div className='avatar-name'>
                <div className='avatar avatar-res'>
                    <img src={avatar_url} alt=""/>
                </div>
                <div className='name-login-resp'>
                    <div className='name name-responsive'>{name}</div>
                    <div className='login-container login-container-responsive'>
                        <a href={html_url} target="_blank" rel="noreferrer" className='login'>{login}</a>
                    </div>
                </div>
            </div>
            <div className='followers-container followers-responsive'>
                <div className='followers'>
                    <img className='icon' src={ifollowers} alt=""/>
                    <div className='followers-text followers-text-responsive'>{rounding(followers)} followers</div>
                </div>
                <div className='following'>
                    <img className='icon' src={ifollowing} alt=""/>
                    <div className='following-text followers-text-responsive'>{following} following</div>
                </div>
            </div>
        </div>
    )
}