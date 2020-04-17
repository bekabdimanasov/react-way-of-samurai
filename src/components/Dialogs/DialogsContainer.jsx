import React from 'react'
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onChangeMessage = (body) => {
        props.store.dispatch(updateNewMessageActionCreator(body));
    }

    return (<Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} newMessage={state.dialogsPage.newMessage}
                     sendMessage={sendMessage} onChangeMessage={onChangeMessage} />)
}

export default DialogsContainer;