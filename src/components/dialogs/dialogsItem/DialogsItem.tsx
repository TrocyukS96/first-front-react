import React from 'react';
import s from './DialogsItem.module.css';
import {dialogsPageType} from "../../../redux/state";

type DialogsItemType = {
    messages: any
    // name:string
    // id:number
}

export const DialogsItem = (props: DialogsItemType) => {
    const dialogsMap = props.messages.map((d: any,i: any) => {

        return (
            <li className={s.dialogsItem} key={i}>
                <div className={s.user}>
                    <img className={s.img} src={d.img} alt="user-image"/>
                    <span className={s.userName}>{d.name}</span>
                </div>
                <p className={s.text}>{d.text}</p>
            </li>
        )
    })
    return (
        <>
            {dialogsMap}
        </>


    )
}
