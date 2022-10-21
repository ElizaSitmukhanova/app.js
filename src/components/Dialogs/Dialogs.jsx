import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}> {props.name} </NavLink>
    </div>
}
const Messages = (props) => {
    return <div className={s.dialog}>
        {props.message}
    </div>
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Eliza" id="1" />
                <DialogItem name="Monica" id="2" />
                <DialogItem name="Joey" id="3" />
                <DialogItem name="Phoebe" id="4" />
                <DialogItem name="Rachel" id="5" />
                <DialogItem name="Chandler" id="6" />
                <DialogItem name="Ross" id="7" />
            </div>
            <div className={s.messages}>
                <Messages message="Кстати, в качестве благодарности я хочу тебя куда-нибудь сводить." />
                <Messages message="Серьезно?" />
                <Messages message="Да. Мы с Джо как раз сегодня идем в кино. Пойдешь с нами? " />
                <Messages message="Не могу, потому что... я их видела." />
                <Messages message="Ты видела все фильмы?" />
                <Messages message="Да! Я большая поклонница... фильмов... кинематографа... кино. " />
                <Messages message="Может, сходим куда-нибудь еще? " />
                <Messages message="В зависимости от того, куда. Я почти везде была. " />
               
            </div>
        </div>
    )
}

export default Dialogs;


