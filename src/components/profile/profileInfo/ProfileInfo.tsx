import React, { ChangeEvent } from 'react';
import s from './ProfileInfo.module.css';
import ProfileImg from './../../../assets/images/main/main-img.jpg';
import {ProfileType} from '../Profile';
import {Preloader} from "../../preloader/Preloader";
import {ProfileStatus} from "../profileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType
    status:string
    updateStatus:(status:string)=>void
    isOwner:boolean
    savePhoto:(value:any)=>void

}

function ProfileInfo(props: ProfileInfoPropsType) {
    if(!props.profile){
        return <Preloader/>
    }
    const onMainPhotoSelect = (e:ChangeEvent<HTMLInputElement>) =>{
    if(e.target.files){
        props.savePhoto(e.target.files[0])
    }
    }
    console.log('props.profile', props.profile)
    return (
        <div >
            <img className={s.profileImg} src={ ProfileImg } alt="profile-image"/>
            <div className={s.personBlock}>

                <img className={s.personImg} src={props.profile.photos.small ? props.profile.photos.small : ProfileImg } alt="person-image"/>

                <div className={s.personContent}>
                    {props.isOwner && <input
                        type={'file'}
                        onChange={onMainPhotoSelect}
                    />}
                    <h3 className={s.personTitle}>{props.profile.fullName}</h3>
                    <div className={s.status}>
                        <ProfileStatus
                            status={props.status}
                            updateStatus={props.updateStatus}

                        />
                    </div>
                    <div className={s.contacts}>
                        <h3>Контакты</h3>
                        <h3>О себе: <span>{props.profile.aboutMe}</span></h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;

