import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.scss';
import ProfileImg from './../../../assets/images/main/main-img.jpg';
import {ProfileType} from '../Profile';
import {Preloader} from "../../preloader/Preloader";
import {ProfileDescription} from '../profileDescription/ProfileDescription';
import {Avatar} from "@mui/material";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (value: any) => void
    updateProfile: (values: any) => void

}

function ProfileInfo(props: ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={s.profileInfoBlock}>
            <div className={s.bg}></div>
            <div className={s.top}>
                <div className={s.topImgWrap}>
                    <Avatar className={s.topImg} alt="person-image" src={props.profile.photos.small ? props.profile.photos.small : ProfileImg} />
                    <div className={s.topContent}>
                        {props.isOwner && <input
                            type={'file'}
                            onChange={onMainPhotoSelect}
                        />}
                    </div>

                </div>

            </div>
            <div>
                <ProfileDescription
                    updateProfile={props.updateProfile}
                    profile={props.profile}
                    isOwner={props.isOwner}
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>


        </div>
    );
}

export default ProfileInfo;

