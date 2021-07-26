import React from 'react';
import s from './Message.module.css';


type PropsType = {
    text: string
    id: number
}

export const Message = (props:PropsType) => {
    return (
        <p className={s.message}>{props.text}</p>

    )
}
