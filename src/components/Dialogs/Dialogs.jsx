import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    <NavLink to='/dialog/1'>Bek</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialog/2'>Saamai</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialog/3'>Bekjan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialog/4'>Mama</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialog/5'>Galmurza</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialog/6'>Kylych</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hello
                </div>
                <div className={s.message}>
                    How are you, Bek?
                </div>
                <div className={s.message}>
                    Fine
                </div>
            </div>
        </div>
    )
}

export default Dialogs;