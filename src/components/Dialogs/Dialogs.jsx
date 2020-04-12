import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    Bek
                </div>
                <div className={s.dialog}>
                    Saamai
                </div>
                <div className={s.dialog}>
                    Bekjan
                </div>
                <div className={s.dialog}>
                    Mama
                </div>
                <div className={s.dialog}>
                    Galmurza
                </div>
                <div className={s.dialog}>
                    Kylych
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