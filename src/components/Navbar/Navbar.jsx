
import s from './Navbar.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = (props) => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}> Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}> Massages</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to ="/news" activeClassName={s.activeLink}> News</NavLink >
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/Music" activeClassName={s.activeLink}> Music</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/Settings" activeClassName={s.activeLink}> Settings</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/Friends" activeClassName={s.activeLink}>  Friends   <div className={s.image}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJLCYEZrFKlXkhOOFJ0D2L9zxSIDQ20QYe7jH5VmKuA&s'/> 
            <figcaption>Sacha</figcaption>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtrqJsSG2K5XQ3Yi2cSdFtXPKSt-rNrYNPCHCD_-kxaw&s'/> 
            <figcaption>Marlin</figcaption>
            <img src='https://i.playground.ru/p/8pI98wtz-DauTH74BmHGCA.webp'/> 
            <figcaption>Pasha</figcaption>
            </div>
            </NavLink>
        </div>
    </nav>
}
export default Navbar;
