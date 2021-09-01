import React, {ChangeEvent,KeyboardEvent, useState} from 'react';

import s from './Training.module.css';
import {
    ActionTypes,
    AddTrainingTaskAC,
    addTrainTask,
    ChangeTrainingTaskTextAC,
    TrainingPageType
} from "../../redux/state";

type PropsType ={
    dispatch: (action: ActionTypes) => void
    trainingPageState:TrainingPageType

}


export const Training = (props: PropsType) => {
    const trainingItemMap = props.trainingPageState.tasks.map(m=>{
        return(
            <li >
                <span>{m.title}</span>
                <p>{m.descriptions}</p>
            </li>
        )
    })
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        if(e.currentTarget.value){
            props.dispatch(ChangeTrainingTaskTextAC(e.currentTarget.value))
            e.preventDefault()
        }
    }
    const onClickHandler = () =>{
        props.dispatch(AddTrainingTaskAC())

    }
   const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            props.dispatch(AddTrainingTaskAC())
        }
   }
    return (
        <div className={s.training}>
            <ul className={s.itemList}>
                {trainingItemMap}
            </ul>
            <div className={s.inputFormBlock}>
                <input onChange={onChangeHandler} value={props.trainingPageState.newTask} onKeyPress={onKeyPressHandler}/>
                <button onClick={onClickHandler} >Add message</button>
            </div>
        </div>
    )
}
