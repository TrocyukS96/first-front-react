import React from 'react';
import s from './Training.module.css';
import {Dispatch} from "redux";
import {AddTrainingTaskAC, ChangeTrainingTaskTextAC} from "../../redux/TrainingReducer";
import {connect} from "react-redux";
import {AppRootType} from "../../redux/redux-store";
import {InputTrainingBlock} from "./inputTrainingBlock/InputTrainingBlock";

type TaskType = {id: number, title: string, descriptions: string, score: number}

type mstpType = {
    newMessage: string
    tasks: TaskType[]
}

type mdtpType = {
    changeMessage: (message: string) => void
    addMessage: () => void
}
type PropsType = mstpType & mdtpType


function Training(props: PropsType){
    const trainingItemMap = props.tasks.map(m => {
        return (
            <li >
                <span>{m.title}</span>
                <p>{m.descriptions}</p>
            </li>
        )
    })


    return (
        <div className={s.training}>
            <ul className={s.itemList}>
                {trainingItemMap}
            </ul>
            <div className={s.inputFormBlock}>
                {/*<TrainingContainer/>*/}
                <InputTrainingBlock
                    newMessage={props.newMessage}
                    addMessage={props.addMessage}
                    changeMessage={props.changeMessage}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppRootType): mstpType=> {
    return {
        tasks: state.trainingPage.tasks,
        newMessage: state.trainingPage.newTask
    }

}
const mapDispatchToProps = (dispatch: Dispatch): mdtpType => {
    return {
        changeMessage: (message: string) => {
            dispatch(ChangeTrainingTaskTextAC(message))
        },
        addMessage: () => {
            dispatch(AddTrainingTaskAC())
        }
    }
}
export const TrainingContainer = connect<mstpType, mdtpType, {}, AppRootType>(mapStateToProps, mapDispatchToProps)(Training);

