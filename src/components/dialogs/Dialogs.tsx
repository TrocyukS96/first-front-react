import React from 'react';

import s from './Dialogs.module.css';
import {DialogsItem} from "./dialogsItem/DialogsItem";
import {ActionTypes, dialogsPageType} from "../../redux/state";
import {InputBlockContainer} from "./inputBlock/InputBlockContainer";

type PropsType = {
    dialogsPageState: dialogsPageType
    dispatch: (action: ActionTypes) => void

}


export const Dialogs = (props: PropsType) => {


    return (
        <div className={s.dialogs}>
            <ul className={s.itemList}>
                <DialogsItem dialogsPageState={props.dialogsPageState}/>
            </ul>
            <InputBlockContainer
                dialogsPageState={props.dialogsPageState}
                dispatch={props.dispatch}
            />
        </div>
    )
}
