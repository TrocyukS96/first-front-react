import React, {ChangeEvent, RefObject, useRef} from 'react';

import s from "../Profile.module.css";

export type ProfileFormPropsType = {
    newPostValue:string
    sendPost: () => void
    changePostText:(newPostText:string)=>void

}


function ProfileForm(props: ProfileFormPropsType) {
    let newPostElement: RefObject<HTMLTextAreaElement> = useRef(null);  // хук
    const onClickPostHandler = () => {
        props.sendPost()
        props.changePostText('')

    }
    const onChangeTextPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        if (e.currentTarget.value) {
            props.changePostText(e.currentTarget.value)

        }
    }

    return (
        <div className={s.profileForm}>
            <h3 className={s.formTitle}>My posts</h3>
            <div className={s.inputBlock}>
                <textarea
                    // ref={newPostElement}
                    value={props.newPostValue}
                    // onChange={onChangeTextPost}
                    onChange={(e)=>{props.changePostText(e.currentTarget.value)}}
                />

            </div>
            <button
                className={s.formBtn}
                onClick={onClickPostHandler}
            >Send
            </button>
        </div>
    );
}

export default ProfileForm;