import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.scss';
import ProfileImg from './../../../assets/images/main/main-img.jpg';
import {ProfileType} from '../Profile';
import {Preloader} from "../../preloader/Preloader";
import {ProfileDescription} from '../profileDescription/ProfileDescription';

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
    console.log(props.status, 'status')
    return (
        <div className={s.profileInfoBlock}>
            <div className={s.top}>
                <div className={s.topImgWrap}>
                    <img className={s.topImg}
                         src={props.profile.photos.small ? props.profile.photos.small : ProfileImg} alt="person-image"/>
                    <div className={s.topContent}>
                        {props.isOwner && <input
                            type={'file'}
                            onChange={onMainPhotoSelect}
                        />}
                    </div>

                </div>

            </div>
            {/*<div className={s.about}>*/}
            {/*    <h2>*/}
            {/*        {props.profile.fullName}*/}
            {/*    </h2>*/}
            {/*    <p className={s.status}>*/}
            {/*        {}*/}
            {/*    </p>*/}
            {/*</div>*/}
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

