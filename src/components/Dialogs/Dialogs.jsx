import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialog = props.dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={d.id}/>)
    let message = props.messages.map(m => <Message key={m.id} message={m.message}/>)

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onChangeMessage = (e) => {
        let body = e.target.value;
        props.onChangeMessage(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                <div>{message}</div>
                <div>
                    <textarea onChange={onChangeMessage} value={props.newMessage} placeholder={"Enter something"}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessage}>Send</button>
                </div>
            </div>

            {/*I am add, at*/}

            {/*here*/}

        </div>
    )
}

export default Dialogs;