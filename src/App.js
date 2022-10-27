import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";


import { BrowserRouter, Route } from "react-router-dom";
import { Routes, } from 'react-router-dom/dist';

import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Set/Settings';

const App = (props) => {



    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div class='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs
                            localstate={props.state.dialogsPage} />} />
                        <Route path='/profile' element={<Profile
                            localstate={props.state.profilePage} />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/settings' element={<Settings />} />


                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
