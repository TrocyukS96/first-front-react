import React from 'react';
import s from './Profile.module.css';
import Posts from './posts/Posts';
import ProfileData from "./profileData/ProfileData";
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
    addPostText: (newPostText: string) => void
    setUsersProfile: (profile: any) => void
    isAuth:boolean
    status:string
    updateStatus:(status:string)=>void
    isOwner:boolean
    savePhoto:(value:any)=>void
}

function Profile(props: ProfilePropsType) {
    return (
        <main className={s.profile}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}


            />
            <ProfileData
                addPostText={props.addPostText}
            />

            <Posts posts={props.posts}/>
        </main>
    );
}

export default Profile;

