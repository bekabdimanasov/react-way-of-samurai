import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = `/dialog/${props.id}`
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name='Bek' id='1'/>
                <DialogsItem name='Saamai' id='2'/>
                <DialogsItem name='Bekjan' id='3'/>
                <DialogsItem name='Mama' id='4'/>
                <DialogsItem name='Galmurza' id='5'/>
                <DialogsItem name='Kylych' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hello'/>
                <Message message='How are you, Bek?'/>
                <Message message='Fine'/>
            </div>
        </div>
    )
}

export default Dialogs;