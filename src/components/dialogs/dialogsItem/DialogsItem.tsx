import React from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";
import {dialogsPageType} from "../../../redux/state";

type DialogsItemType = {
    dialogsPageState: dialogsPageType
    // name:string
    // id:number
}

export const DialogsItem = (props: DialogsItemType) => {
    const dialogsMap = props.dialogsPageState.messages.map(d => {

        return (
            <li className={s.dialogsItem}>
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
