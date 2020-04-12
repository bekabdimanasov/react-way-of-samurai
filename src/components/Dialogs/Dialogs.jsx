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
    let dialogElements = [
        {id:1, name:'Bek'},
        {id:2, name:'Saamai'},
        {id:3, name:'Bekjan'},
        {id:4, name:'Mama'},
        {id:5, name:'Galmurza'},
        {id:6, name:'Kylych'}
    ];

    let messageElements = [
        {id:1, message:'Hello'},
        {id:2, message:'How are you, Bek?'},
        {id:3, message:'Fine'}
    ]

    let dialog = dialogElements.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let message = messageElements.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialog}
            </div>
            <div className={s.messages}>
                {message}
            </div>
        </div>
    )
}

export default Dialogs;