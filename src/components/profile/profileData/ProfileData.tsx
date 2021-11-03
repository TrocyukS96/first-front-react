import React from 'react';
import s from "../Profile.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {FormControl} from "../../formControls/FormControl";

const maxLength10 = maxLengthCreator(10)

//types
export type ProfileFormPropsType = {
    // newPostValue: string
    // sendPost: () => void
    addPostText: (newPostText:string) => void
}
type ProfileFormType = {
    addDataProfile: string
}

const ProfileForm: React.FC<InjectedFormProps<ProfileFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.inputBlock}>
                <Field component={FormControl} name="addDataProfile" placeholder={'Post message'} validate={[requiredField, maxLength10]}/>
            </div>
            <button className={s.formBtn}>Send</button>
        </form>
    )
}

function ProfileData(props: ProfileFormPropsType) {
    debugger

    const addPostText = (newPostText:ProfileFormType) => {
        props.addPostText(newPostText.addDataProfile)

    }
    return (
        <div className={s.profileForm}>
            <h3 className={s.formTitle}>My posts</h3>
            <ProfileReduxForm onSubmit={addPostText}/>
        </div>
    );
}

const ProfileReduxForm = reduxForm<ProfileFormType>({
    form: 'ProfileForm'
})(ProfileForm)


export default ProfileData;