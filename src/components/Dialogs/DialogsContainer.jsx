import React from 'react'
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (<StoreContext.Consumer>{
        (store) => {
            let state = store.getState();

            let sendMessage = () => {
                store.dispatch(addMessageActionCreator());
            }

            let onChangeMessage = (body) => {
                store.dispatch(updateNewMessageActionCreator(body));
            }
            return (<Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}
                             newMessage={state.dialogsPage.newMessage}
                             sendMessage={sendMessage} onChangeMessage={onChangeMessage}/>)
        }}
    </StoreContext.Consumer>)
}

export default DialogsContainer;