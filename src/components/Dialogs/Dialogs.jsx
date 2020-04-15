import React from 'react'
import s from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialog = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let message = props.state.messages.map(m => <Message message={m.message}/>)

    // I am add, at
    let newDialogElement = React.createRef();
    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onChangeMessage = () => {
        let text = newDialogElement.current.value;
        props.dispatch(updateNewMessageActionCreator(text));
    }
    // here
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialog}
            </div>
            <div className={s.messages}>
                {message}
            </div>

            {/*I am add, at*/}
            <div>
                <textarea onChange={onChangeMessage} value={props.state.newMessage} ref={newDialogElement}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
            {/*here*/}

        </div>
    )
}

export default Dialogs;