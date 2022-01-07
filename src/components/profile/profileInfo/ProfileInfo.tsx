import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import ProfileImg from './../../../assets/images/main/main-img.jpg';
import {ProfileType} from '../Profile';
import {Preloader} from "../../preloader/Preloader";
import {ProfileDescription} from '../profileDescription/ProfileDescription';

type ProfileInfoPropsType = {
    profile: ProfileType
    status:string
    updateStatus:(status:string)=>void
    isOwner:boolean
    savePhoto:(value:any)=>void
    updateProfile:(values:any)=>void

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
    console.log(props.status, 'status')
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
                    <ProfileDescription
                        updateProfile={props.updateProfile}
                        profile={props.profile}
                        isOwner={props.isOwner}
                        status={props.status}
                        updateStatus={props.updateStatus}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;

