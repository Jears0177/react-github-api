import React from 'react'
import user from '../../assets/icon-Union.png'
import './EmptyState.css'

export const EmptyState = () => {
    return (
        <div className='init-container init-responsive'>
            <div className='init-wrapper'>
                <div>
                    <div className='user-img'>
                        <img src={user} alt=""/>
                    </div>
                    <div className='text-container'>
                        <div className='init-text'>
                            User not found
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}