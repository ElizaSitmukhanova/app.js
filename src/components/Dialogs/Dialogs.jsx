import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';
import { updateNewMessageBodyCreator } from '../../Redux/state';
import { sendMessageCreator } from '../../Redux/state';

const Dialogs = (props) => {
    
    let state = props.store.getState().dialogsPage;

    let DialogElement =
        state.dialogsData.map(d => <DialogItem image={d.image} name={d.name} id={d.id} />)
    let MessagesElement =
        state.messagesData.map(m => <Message message={m.message} id={m.id} />)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    };

        return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {DialogElement}
            </div>
            <div className={s.messages}>
                <div> {MessagesElement}</div>  
                <div>
                    <div>
                        <textarea value= {newMessageBody} 
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'> </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}> Send </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;


