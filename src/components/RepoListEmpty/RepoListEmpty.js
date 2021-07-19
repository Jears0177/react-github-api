import React from 'react'
import emptyList from '../../assets/icon-emptylist.png'
import './RepoListEmpty.css'

export const RepoListEmpty = () => {
    return (
        <div className='repo-list-container repo-list-responsive'>
            <div className='repo-list-wrapper'>
                <div>
                    <div className='user-img'>
                        <img src={emptyList} alt=""/>
                    </div>
                    <div className='text-container'>
                        <div className='stand-text'>
                            Repository list is empty
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}