import React from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

type DialogsItemType={
    name:string
    id:number
}

export const DialogsItem = (props:DialogsItemType) => {

    return (
        <li className={s.item}>
            <NavLink className={s.link} activeClassName={s.activeLink} to="#">{props.name}</NavLink>
        </li>
    )
}
