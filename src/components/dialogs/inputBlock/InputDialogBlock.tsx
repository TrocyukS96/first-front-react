import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './InputBlock.module.css';
import {dialogsPageType} from "../../../redux/state";
import {Dispatch} from "redux";
import {addDialogsTextAC, changeDialogsTextAC} from "../../../redux/DialogsReducer";
import {connect} from "react-redux";
import {AppRootType} from "../../../redux/redux-store";

type PropsType = {
    newPost: string
    changeMessage: (newMessage: string) => void
    addMessage: () => void
}

export const InputDialogBlock = (props: PropsType) => {
    const onChangeMessageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newMessageValue = e.currentTarget.value

        if (newMessageValue) {
            props.changeMessage(newMessageValue)

        }
    }
    // const onCLickAddMessageHandler = () => {
    //     debugger
    //     props.addMessage()
    //     props.changeMessage('')
    //     /*props.changeMessage('')*/
    //     // console.log(props.addMessage())
    //     // console.log(' onCLickAddMessageHandler is working')
    // }

    return (
        <div className={s.inputFormBlock}>
            <input type="text" onChange={onChangeMessageHandler} value={props.newPost}/>
            <button onClick={() => {
                debugger
                props.addMessage()
                props.changeMessage('')
            }
            }>Add message</button>
        </div>
    )
}


// const mapStateToProps = (state: AppRootType) => {
//     return {
//         newPost: state.dialogsPage.newMessage
//     }
// }
// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         addMessage: () => dispatch(addDialogsTextAC()),
//         changeMessage: (newMessage: string) => dispatch(changeDialogsTextAC(newMessage))
//     }
// }
//
// export const InputDialogBlockContainer = connect(mapStateToProps, mapDispatchToProps)(InputDialogBlock);