import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}> 
        <div className={s.image}>
        <img src={props.image}/>  
        </div>
        <div className={s.name}> {props.name} </div>
       
         </NavLink>
     
         
    </div>
}



export default DialogItem;


