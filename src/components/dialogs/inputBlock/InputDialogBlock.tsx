import React from 'react';
import s from './InputBlock.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, TextArea} from "../../formControls/TextArea";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";

type PropsType = {
    // newPost: string
    // changeMessage: (newMessage: string) => void
    addMessage: (newMessage: string) => void
}

export const InputDialogBlock = (props: PropsType) => {
    const addNewMessage = (dialogsData: DialogFormType) => {
        props.addMessage(dialogsData.AddMessageField)
    }
    return (
        <div className={s.inputFormBlock}>
            <DialogsReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}

type DialogFormType = {
    AddMessageField: string,
}
const maxLength10 = maxLengthCreator(10)

const DialogForm: React.FC<InjectedFormProps<DialogFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field type="text" component={Input} name="AddMessageField" placeholder={'add message'} validate={[requiredField,maxLength10 ]}/>
            <button>Add message</button>
        </form>
    )
}

const DialogsReduxForm = reduxForm<DialogFormType>({
    form: 'DialogsForm'
})(DialogForm)

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