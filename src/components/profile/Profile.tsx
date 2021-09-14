import React from 'react';

import s from './Profile.module.css';
import ProfileImg from './../../assets/images/main/main-img.jpg';
import PersonImg from './../../assets/images/main/person-img.jpg';
import Posts from './posts/Posts';
import {Dispatch} from "redux";
import {addTaskAC, ChangePostTextAC} from "../../redux/ProfileReducer";
import {connect} from "react-redux";
import ProfileForm from "./profileForm/ProfileForm";
import {AppRootType} from "../../redux/redux-store";

type PostType = {
    id: number
    text: string
    img: any
    likeCount: number
}
type mstpType = {
    newPostValue: string
    posts: PostType[]

}
type mdtpType = {
    changePostText: (newPostText: string) => void
    sendPost: () => void
}

type PropsType = mstpType & mdtpType

function Profile(props: PropsType) {
    return (
        <main className={s.profile}>
            <img className={s.profileImg} src={ProfileImg} alt="profile-image"/>
            <div className={s.personBlock}>
                <img className={s.personImg} src={PersonImg} alt="person-image"/>
                <div className={s.personContent}>
                    <h3 className={s.personTitle}>StanislavIT</h3>
                    <div className={s.personData}>
                        <p className={s.personBirth}>Date of birth: <span>29 of Jenuary</span></p>
                        <p className={s.personCity}>City: <span>Molodechno</span></p>
                        <p className={s.personEducation}>Education: <span>University of civil protection</span></p>
                        <p className={s.personSite}>Web Site: <span>https://github.com/TrocyukS96</span></p>
                    </div>
                </div>
            </div>
            <ProfileForm
                newPostValue={props.newPostValue}
                sendPost={props.sendPost}
                changePostText={props.changePostText}/>

            <Posts posts={props.posts}/>
        </main>
    );
}


const mapStateToProps = (state: AppRootType): mstpType => {
    return {
        newPostValue: state.profilePage.newPost,
        posts: state.profilePage.posts
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mdtpType => {
    return {
        sendPost: () => {
            dispatch(addTaskAC())
        },
        changePostText: (newPostText: string) => {
            ChangePostTextAC(newPostText)
        }
    }
}

export const ProfileContainer = connect<mstpType, mdtpType, {}, AppRootType>(mapStateToProps, mapDispatchToProps)(Profile);

