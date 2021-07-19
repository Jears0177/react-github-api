import React from 'react'
import {Profile} from "../Profile/Profile";
import {Repositories} from "../Repositories/Repositories";
import {RepoListEmpty} from "../RepoListEmpty/RepoListEmpty";
import {useSelector} from "react-redux";
import './Main.css'


export const Main = () => {
    const {repo} = useSelector(state => state.user)
    return (
        <div className='main main-res'>
            <Profile/>
            {repo.length === 0 ? <RepoListEmpty/> : <Repositories/>}
        </div>
    )

}