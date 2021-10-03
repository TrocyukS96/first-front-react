import React from 'react';
import s from './Profile.module.css';
import Posts from './posts/Posts';
import ProfileForm from "./profileForm/ProfileForm";
import {PostType} from "./ProfileContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

export type ProfileType = {
    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": any,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": any,
        "github": string,
        "mainLink": any
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }
}

type ProfilePropsType = {
    newPostValue: string
    profile: ProfileType
    posts: PostType[]
    addTask: () => void
    changePostText: (newText: string) => void
    setUsersProfile: (profile: any) => void
}

function Profile(props: ProfilePropsType) {
    console.log(props.profile)
    return (
        <main className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            <ProfileForm
                newPostValue={props.newPostValue}
                sendPost={props.addTask}
                changePostText={props.changePostText}
            />

            <Posts posts={props.posts}/>
        </main>
    );
}

export default Profile;

