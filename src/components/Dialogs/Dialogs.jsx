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
    let dialogsData = [ 
        {id: 1, name: "Eliza"},
        {id: 2, name: "Monica"}, 
        {id: 3, name: "Ross"}, 
        {id: 4, name: "Chandler"}, 
        {id: 5, name: "Phoebe"}, 
        {id: 6, name: "Rachel"}, 
        {id: 7, name: "Joey"}, 
    ] 
 
    let messagesData = [ 
        {id: 1, message: "Кстати, в качестве благодарности я хочу тебя куда-нибудь сводить."},
        {id: 2, message: "Серьезно?"},
        {id: 3, message: "Да. Мы с Джо как раз сегодня идем в кино. Пойдешь с нами? "},
        {id: 4, message: "Не могу, потому что... я их видела."},
        {id: 5, message: "Ты видела все фильмы?"},
        {id: 6, message: "Да! Я большая поклонница... фильмов... кинематографа... кино. "},
        {id: 7, message: "Может, сходим куда-нибудь еще?"},
        {id: 8, message: "В зависимости от того, куда. Я почти везде была. "},
    ] 
 
    return ( 
        <div className={s.dialogs}> 
            <div className={s.dialogsItems}> 
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id ={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id ={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id ={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id ={dialogsData[5].id}/>
                <DialogItem name={dialogsData[6].name} id ={dialogsData[6].id}/>
                 
            </div> 
            <div className={s.messages}> 
            Messages message={messagesData[0].message} id={messagesData[0].id} />
                <Messages message={messagesData[1].message} id={messagesData[1].id} />
                <Messages message={messagesData[2].message} id={messagesData[2].id} />
                <Messages message={messagesData[3].message} id={messagesData[3].id} />
                <Messages message={messagesData[4].message} id={messagesData[4].id} />
                <Messages message={messagesData[5].message} id={messagesData[5].id} />
                <Messages message={messagesData[6].message} id={messagesData[6].id} />
                <Messages message={messagesData[7].message} id={messagesData[7].id} />
            </div> 
        </div> 
    )
}

export default Dialogs;


