import React from 'react'
import search from '../../assets/icon-image.png'
import './InitState.css'

export const InitState = () => {
    return (
        <div className='init-container'>
            <div className='init-wrapper'>
                <div>
                    <div className='search-img'>
                        <img src={search} alt=""/>
                    </div>
                    <div className='text-container'>
                        <div className='init-text'>
                            Start with searching
                        </div>
                        <div className='init-text sec-text'>
                            a GitHub user
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}