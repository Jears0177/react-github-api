import React from 'react'
import {Header} from "./components/Header/Header";
import {useSelector} from "react-redux";
import {Main} from "./components/Main/Main";
import {InitState} from "./components/InitState/InintState";
import {isEmpty} from "./utils/objectIsEmpty";
import {EmptyState} from "./components/EmptyState/EmptyState";
import {Preloader} from "./components/Preloader/Preloader";
import './App.css';

function App() {
    const {user, userError, isFetching} = useSelector(state => state.user)
    if (isFetching) {
        return (
            <div className="content content-responsive">
                <Header/>
                <div className='preloader-container preloader-container-responsive'>
                    <div className='vertical-container'>
                        <Preloader/>
                    </div>
                </div>
            </div>
        )
    }
    if (!isEmpty(user) && !userError) {
        return (
            <div className="content content-responsive">
                <Header/>
                <InitState/>
            </div>
        )
    } else if (userError) {
        return (
            <div className="content content-responsive">
                <Header/>
                <EmptyState/>
            </div>
        )
    }

    return (
        <div className="content content-responsive">
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
