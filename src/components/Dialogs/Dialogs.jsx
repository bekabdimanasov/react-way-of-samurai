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
    let dialogsData = [
        {id:1, name:'Bek'},
        {id:2, name:'Saamai'},
        {id:3, name:'Bekjan'},
        {id:4, name:'Mama'},
        {id:5, name:'Galmurza'},
        {id:6, name:'Kylych'}
    ];

    let messagesData = [
        {id:1, message:'Hello'},
        {id:2, message:'How are you, Bek?'},
        {id:3, message:'Fine'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>
    )
}

export default Dialogs;