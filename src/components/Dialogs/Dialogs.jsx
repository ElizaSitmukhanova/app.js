import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message';

const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let DialogElement =
        state.dialogsData.map(d => <DialogItem image={d.image} name={d.name} id={d.id} />)
    let MessagesElement =
        state.messagesData.map(m => <Message message={m.message} id={m.id} />)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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


