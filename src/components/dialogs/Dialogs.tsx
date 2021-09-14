import React from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from "./dialogsItem/DialogsItem";
import {InputDialogBlock} from "./inputBlock/InputDialogBlock";
import {AppRootType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {addDialogsTextAC, changeDialogsTextAC} from "../../redux/DialogsReducer";
import {connect} from "react-redux";

type mstpType = {
    messages: any[],
    newPost: string
}

type mdtpType = {
    addMessage: () => void,
    changeMessage: (newMessage: string) => void
}

type PropsType = mstpType & mdtpType

export const Dialogs = (props: PropsType) => {
    return (
        <div className={s.dialogs}>
            <ul className={s.itemList}>
                <DialogsItem messages={props.messages}/>
            </ul>
            <InputDialogBlock
                newPost={props.newPost}
                addMessage={props.addMessage}
                changeMessage={props.changeMessage}
            />
            {/*<InputDialogBlockContainer />*/}
        </div>
    )
}

const mapStateToProps = (state: AppRootType): mstpType => {
    return {
        messages: state.dialogsPage.messages,
        newPost: state.dialogsPage.newMessage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mdtpType => {
    return {
        addMessage: () => {
            dispatch(addDialogsTextAC())
        },
        changeMessage: (newMessage: string) => dispatch(changeDialogsTextAC(newMessage))
    }
}

export const DialogsContainer = connect<mstpType, mdtpType, {}, AppRootType>(mapStateToProps, mapDispatchToProps)(Dialogs);