import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';
 

const Dialogs = (props) => {
   


    let DialogElement =
        props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

    let MessagesElement =
        props.messagesData.map(m => <Message message={m.message} id={m.id} />)
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


