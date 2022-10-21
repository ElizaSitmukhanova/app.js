/* eslint-disable react/jsx-no-undef */
import s from './Navbar.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile"> Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs">Massages</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to ="/news">News</NavLink >
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/Music">Music</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/Settings">Settings</NavLink>
        </div>
    </nav>
}
export default Navbar;
