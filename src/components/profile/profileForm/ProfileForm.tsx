import React, {ChangeEvent, RefObject, useRef} from 'react';

import s from "../Profile.module.css";
import {ActionTypes, addTaskAC, ProfilePageType} from "../../../redux/state";

export type ProfileFormPropsType = {

    addPost: () => void
    changePostText:(newPostText:string)=>void
    newPostValue:string
}


function ProfileForm(props: ProfileFormPropsType) {
    let newPostElement: RefObject<HTMLTextAreaElement> = useRef(null);  // хук
    const onClickPostHandler = (e: any) => {
        props.addPost()
        e.preventDefault()
    }
    const onChangeTextPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            props.changePostText(e.currentTarget.value)
        }
    }

    return (
        <form className={s.profileForm}>
            <h3 className={s.formTitle}>My posts</h3>
            <div className={s.inputBlock}>
                <textarea
                    ref={newPostElement}
                    value={props.newPostValue}
                    onChange={onChangeTextPost}
                />
            </div>
            <button
                className={s.formBtn}
                onClick={onClickPostHandler}
            >Send
            </button>
        </form>
    );
}

export default ProfileForm;