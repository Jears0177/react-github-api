import React from 'react'
import './Repository.css'


export const Repository = (props) => {
    return (
        <div className='repo repo-responsive'>
            <div className='repo-info'>
                <div className='repo-name repo-name-responsive'>
                    <a href={props.url} target="_blank" rel="noreferrer">{props.name}</a>
                </div>
                <div className='repo-description repo-description-responsive'>{props.description}</div>
            </div>
        </div>
    )
}