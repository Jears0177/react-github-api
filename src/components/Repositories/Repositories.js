import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getRepos, setPage} from "../../store/reducers/user";
import {Repository} from "./Repository/Repository";
import ReactPaginate from 'react-paginate'
import './Repositories.css'


export const Repositories = () => {
    const state = useSelector(state => state.user)
    const dispatch = useDispatch();
    let pageCount = Math.ceil(state.user.public_repos / 4)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    const {page} = state


    const onPageChange = ({selected: page}) => {
        dispatch(getRepos(page + 1, 4, state.name))
        dispatch(setPage(page + 1))
    }

    return (
        <div className='repo-container repo-container-resp'>
            <div className='repo-header repo-header-resp'>Repositories ({state ? state.user.public_repos : ''})
            </div>
            <div className='repo-content'>
                <div className='repo-content-items'>
                    {state.repo.map((repo, i) => {
                        return (
                            <div key={i}>
                                <Repository name={repo.name} description={repo.description} url={repo.html_url}/>
                            </div>
                        )
                    })}
                </div>
                <div className='paginate paginate-responsive'>
                    <div className='paginate-details-container paginate-details-container-resp'>
                        <div className='paginate-details paginate-details-responsive'>
                            {(page * 4) - 3}-{state.user.public_repos < 4 ? state.user.public_repos : page * 4} of {state.user.public_repos} items
                        </div>
                    </div>
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pages.length}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={2}
                        onPageChange={onPageChange}
                        containerClassName={"pagination pagination-responsive"}
                        previousLinkClassName={"pagination__link"}
                        nextLinkClassName={"pagination__link"}
                        disabledClassName={"pagination__link--disabled"}
                        activeClassName={"pagination__link--active"}
                    />
                </div>
            </div>
        </div>
    )
}