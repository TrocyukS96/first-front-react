import React, {ChangeEvent,KeyboardEvent, useState} from 'react';

import s from './Dialogs.module.css';
import {DialogsItem} from "./dialogsItem/DialogsItem";
import {ActionTypes, changeDialogsTextAC, dialogsPageType} from "../../redux/state";
import {addDialogsTextAC} from "../../redux/state";

type PropsType = {
    dialogsPageState: dialogsPageType
    dispatch: (action: ActionTypes) => void

}


export const Dialogs = (props: PropsType) => {
    const onChangeAddMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMessageValue = e.currentTarget.value
        if (newMessageValue) {
            props.dispatch(changeDialogsTextAC(newMessageValue))
            e.preventDefault()
            console.log(' onChangeAddMessageHandler is working')
        }
    }
    const onCLickAddMessageHandler = () => {
        props.dispatch(addDialogsTextAC())

        console.log(' onCLickAddMessageHandler is working')
    }
    const onKeyPressHandler = (event:KeyboardEvent<HTMLInputElement>) =>{
        if(event.key == 'Enter' ){
            props.dispatch(addDialogsTextAC())
            console.log('press ENTER')
        }
    }

    return (
        <div className={s.dialogs}>
            <ul className={s.itemList}>
                <DialogsItem dialogsPageState={props.dialogsPageState}/>
            </ul>
            <div className={s.inputFormBlock}>
                <input type="text" onChange={onChangeAddMessageHandler} value={props.dialogsPageState.newMessage} onKeyPress={onKeyPressHandler}/>
                <button onClick={onCLickAddMessageHandler}>Add message</button>
            </div>
        </div>
    )
}
