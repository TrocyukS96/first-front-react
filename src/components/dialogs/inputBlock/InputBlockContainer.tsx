import React, {ChangeEvent,KeyboardEvent} from 'react';

import s from './Dialogs.module.css';
import {ActionTypes, addDialogsTextAC, changeDialogsTextAC, dialogsPageType} from "../../../redux/state";
import {InputBlock} from "./InputBlock";


type InputBlockContainerPropsType = {
    dialogsPageState: dialogsPageType
    dispatch: (action: ActionTypes) => void

}


export const InputBlockContainer = (props: InputBlockContainerPropsType) => {

   const newDialogMessage = props.dialogsPageState.newMessage
        const changeDialogMessage =(newDialogMessage:string)=>{
            props.dispatch(changeDialogsTextAC(newDialogMessage))
        }
    const addDialogMessage = () => {
        props.dispatch(addDialogsTextAC())
    }
    const onKeyPressHandler = (event:KeyboardEvent<HTMLInputElement>) =>{
        if(event.key == 'Enter' ){
            props.dispatch(addDialogsTextAC())
            console.log('press ENTER')
        }
    }
    return <InputBlock
        addDialogMessage={addDialogMessage}
        changeDialogMessage={changeDialogMessage}
        newDialogMessage={newDialogMessage}
    />

}
