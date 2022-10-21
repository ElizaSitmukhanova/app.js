import s from './Navbar.module.css';
import React from 'react';

const Navbar = () => {
    return <nav className={s.nav}>
        <div className= {s.item}>
            <a href="/profile">Profile</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a href="/dialogs">Massages</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
        <a href="/news">News</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
        <a href="/Music">Music</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
        <a href="/Settings">Settings</a>
        </div>
    </nav>
}
export default Navbar;
