import React from 'react';

import s from './Dialogs.module.css';
import {DialogsItem} from "./dialogsItem/DialogsItem";
import {dialogsPageType} from "../../redux/state";

type PropsType={
    dialogsPageState:dialogsPageType
}


export const Dialogs = (props:PropsType) => {

    return (
        <div className={s.dialogs}>
            <ul className={s.itemList}>

            </ul>
        </div>
    )
}
