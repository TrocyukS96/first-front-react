import React, {ChangeEvent, RefObject, useRef} from 'react';

import s from "../Profile.module.css";
import {ActionTypes, addTaskAC, ProfilePageType} from "../../../redux/state";
import ProfileForm from "./ProfileForm";

export type ProfileFormPropsType = {
    dispatch: (action: ActionTypes) => void
    profilePage: ProfilePageType

}


function ProfileFormContainer(props: ProfileFormPropsType) {
    const addPost =()=>{
        props.dispatch(addTaskAC())
    }
    const changePostText = (newPostText:string)=>{
        props.dispatch({type: 'CHANGE-POST-TEXT', newText: newPostText})
    }
    const newPostValue = props.profilePage.newPost
    return <ProfileForm
        addPost={addPost}
        changePostText={changePostText}
        newPostValue={newPostValue}
    />
}

export default ProfileFormContainer;