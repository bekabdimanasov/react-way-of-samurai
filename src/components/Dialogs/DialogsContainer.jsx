import React from 'react'
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        },
        onChangeMessage: (body) => {
            let action = updateNewMessageActionCreator(body);
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;