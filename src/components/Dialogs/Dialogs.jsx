import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';
 

const Dialogs = (props) => {
     
    let dialogsData = [
        { id: 1, name: "Eliza" },
        { id: 2, name: "Monica" },
        { id: 3, name: "Ross" },
        { id: 4, name: "Chandler" },
        { id: 5, name: "Phoebe" },
        { id: 6, name: "Rachel" },
        { id: 7, name: "Joey" },
    ];

    let messagesData = [
            { id: 1, message: "Кстати, в качестве благодарности я хочу тебя куда-нибудь сводить." },
            { id: 2, message: "Серьезно?" },
            { id: 3, message: "Да. Мы с Джо как раз сегодня идем в кино. Пойдешь с нами? " },
            { id: 4, message: "Не могу, потому что... я их видела." },
            { id: 5, message: "Ты видела все фильмы?" },
            { id: 6, message: "Да! Я большая поклонница... фильмов... кинематографа... кино. " },
            { id: 7, message: "Может, сходим куда-нибудь еще?" },
            { id: 8, message: "В зависимости от того, куда. Я почти везде была. " },
          ];


    let DialogElement =
        dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

    let MessagesElement =
        messagesData.map(m => <Message message={m.message} id={m.id} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogElement}
            </div>
            <div className={s.messages}>
                {MessagesElement}
            </div>
        </div>
    )
}

export default Dialogs;


