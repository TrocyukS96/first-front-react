import React from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from "./dialogsItem/DialogsItem";
import {InputDialogBlock} from "./inputBlock/InputDialogBlock";

type PropsType ={
    messages: any[],
    newPost: string,
    isAuth:boolean,
    addMessage: (newMessage:string) => void,
    changeMessage: (newMessage: string) => void
}

export const Dialogs = (props: PropsType) => {
    return (
        <div className={s.dialogs}>
            <ul className={s.itemList}>
                <DialogsItem messages={props.messages}/>
            </ul>
            <InputDialogBlock
/*                newPost={props.newPost}*/
                addMessage={props.addMessage}
                // changeMessage={props.changeMessage}
            />
        </div>
    )
}

