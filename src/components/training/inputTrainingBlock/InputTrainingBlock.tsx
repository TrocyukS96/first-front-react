import React from "react";
import {ChangeEvent,KeyboardEvent} from "react";

import s from './InputTrainingBlock.module.css';

type InputTrainingBlockPropsType = {
    changeMessage:(newDialogMessage:string)=>void
    addMessage:()=>void
    newMessage:string

}


export const InputTrainingBlock = (props: InputTrainingBlockPropsType) => {
    const onChangeAddMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMessageValue = e.currentTarget.value
        if (newMessageValue) {
            props.changeMessage(newMessageValue)
            e.preventDefault()
        }
    }
    const onCLickAddMessageHandler = () => {
        props.addMessage()
        console.log(' onCLickAddMessageHandler is working')
    }
    const onKeyPressHandler = (event:KeyboardEvent<HTMLInputElement>) =>{
        if(event.key === 'Enter' ){
            props.addMessage()
            console.log('press ENTER')
        }
    }

    return (
        <div className={s.inputFormBlock}>
    <input type="text" onChange={onChangeAddMessageHandler} value={props.newMessage} onKeyPress={onKeyPressHandler}/>


            <button onClick={onCLickAddMessageHandler}>Add message</button>
        </div>
    )
}
