import React, {ChangeEvent,KeyboardEvent} from 'react';

    import s from './InputBlock.module.css';
import {ActionTypes, addDialogsTextAC, changeDialogsTextAC, dialogsPageType} from "../../../redux/state";


type PropsType = {
    changeDialogMessage:(newDialogMessage:string)=>void
    addDialogMessage:()=>void
    newDialogMessage:string

}


export const InputBlock = (props: PropsType) => {
    const onChangeAddMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMessageValue = e.currentTarget.value
        if (newMessageValue) {
            props.changeDialogMessage(newMessageValue)
            e.preventDefault()
        }
    }
    const onCLickAddMessageHandler = () => {
        props.addDialogMessage()
        console.log(' onCLickAddMessageHandler is working')
    }
    const onKeyPressHandler = (event:KeyboardEvent<HTMLInputElement>) =>{
        if(event.key == 'Enter' ){
            props.addDialogMessage()
            console.log('press ENTER')
        }
    }

    return (
        <div className={s.inputFormBlock}>
            <input type="text" onChange={onChangeAddMessageHandler} value={props.newDialogMessage} onKeyPress={onKeyPressHandler}/>
            <button onClick={onCLickAddMessageHandler}>Add message</button>
        </div>
    )
}
