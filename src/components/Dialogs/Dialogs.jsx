import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';


const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    let addNewMessages = () => {
        let text = newMessageElement.current.value;
        alert(text);

    }


    let DialogElement =
        props.localstate.dialogsData.map(d => <DialogItem image={d.image} name={d.name} id={d.id} />)

    let MessagesElement =
        props.localstate.messagesData.map(m => <Message message={m.message} id={m.id} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogElement}
            </div>
            <div className={s.messages}>
                {MessagesElement}
                <div>
                    <div>
                        <textarea ref={newMessageElement}> </textarea>
                    </div>
                    <div>
                        <button onClick={addNewMessages}> add message </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;


