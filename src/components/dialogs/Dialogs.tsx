import React from 'react';

import s from './Dialogs.module.css';
import {DialogsItem} from "./dialogsItem/DialogsItem";
import {Message} from "./message/Message";

type DialogsDatatype={
    name:string,
    id:number
}

export type messageDataType ={
    text:string
    id:number
}

const dialogsData:Array<DialogsDatatype> = [
    {
        name:"Sergey",
        id:1
    },
    {
        name:"Dima",
        id:2
    },
    {
        name:"Ivan",
        id:3
    },
    {
        name:"Stas",
        id:4
    }

]




const messagesData:Array<messageDataType> = [
    {
        text:"Ab, aliquid magnam officiis porro quod ullam veritatis.",
        id:1
    },
    {
        text:"Ab, aliquid magnam officiis porro quod ullam veritatis.officiis porro quod ullam veritatis.officiis porro quod ullam veritatis.officiis porro quod ullam veritatis.officiis porro quod ullam veritatis.officiis porro quod ullam veritatis.",
        id:2
    },
    {
        text:"Ab, aliquid magnam officiis porro quod ullam veritatis.officiis porro quod ullam veritatis.officiis porro quod ullam veritatis.",
        id:3
    },
]



export const Dialogs = () => {

    let dialog = dialogsData.map((d)=> <DialogsItem id={d.id} name={d.name} key={d.id}/>)
    let message = messagesData.map((m)=>(<Message text={m.text} id={m.id} key={m.id}/>))

    return (
        <div className={s.dialogs}>
            <ul className={s.itemList}>
                {dialog}
            </ul>
            <div className={s.messages}>
                {message}
            </div>
        </div>
    )
}
