import React, {ChangeEvent, RefObject, useRef} from 'react';

import s from './Profile.module.css';
import ProfileImg from './../../assets/images/main/main-img.jpg';
import PersonImg from './../../assets/images/main/person-img.jpg';
import Posts from './posts/Posts';
import {ActionTypes, addTaskAC, ProfilePageType} from "../../redux/state";

export type PropsType = {
    dispatch: (action: ActionTypes) => void
    profilePage: ProfilePageType
}


function Profile(props: PropsType) {
    let newPostElement: RefObject<HTMLTextAreaElement> = useRef(null);  // хук
    const onClickPostHandler = (e: any) => {
        props.dispatch(addTaskAC())
        e.preventDefault()
        console.log(e)
        // props.changeNewPostText('')
    }
    const onChangeTextPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            props.dispatch({type: 'CHANGE-POST-TEXT', newText: e.currentTarget.value})
        }
    }

    return (
        <main className={s.profile}>
            <img className={s.profileImg} src={ProfileImg} alt="profile-image"/>
            <div className={s.personBlock}>
                <img className={s.personImg} src={PersonImg} alt="person-image"/>
                <div className={s.personContent}>
                    <h3 className={s.personTitle}>StanislavIT</h3>
                    <div className={s.personData}>
                        <p className={s.personBirth}>Date of birth: <span>29 of Jenuary</span></p>
                        <p className={s.personCithy}>City: <span>Molodechno</span></p>
                        <p className={s.personEducation}>Education: <span>University of civil protection</span></p>
                        <p className={s.personSite}>Web Site: <span>https://github.com/TrocyukS96</span></p>
                    </div>
                </div>
            </div>
            <form className={s.profileForm}>
                <h3 className={s.formTitle}>
                    My posts
                </h3>
                <div className={s.inputBlock}>
                    <textarea ref={newPostElement} value={props.profilePage.newPost} onChange={onChangeTextPost}/>
                </div>
                <button className={s.formBtn} onClick={onClickPostHandler}>Send</button>
            </form>
            <Posts postsState={props.profilePage.posts}/>
        </main>
    );
}

export default Profile;