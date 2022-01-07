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
        "website": string,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": string,
        "github": string,
        "mainLink": string
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
    updateProfile:(values:any)=>void
}

function Profile(props: ProfilePropsType) {
    console.log(props.status, 'status')
    return (
        <main className={s.profile}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                updateProfile={props.updateProfile}

            />
            <ProfileData
                addPostText={props.addPostText}
            />

            <Posts posts={props.posts}/>
        </main>
    );
}

export default Profile;

