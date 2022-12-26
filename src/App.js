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
import Friends from './components/Friends/Friends'

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar localstate={props.state.sideBar}/>
                <div class='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs
                            store={props.store} />} />
                        <Route path='/profile' element={<Profile 
                            store={props.store} />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/settings' element={<Settings />} />
                        <Route path='/friends' element={<Friends  />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
