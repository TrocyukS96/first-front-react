import React from 'react';

import s from './Profile.module.css';
import ProfileImg from './../../assets/images/main/main-img.jpg';
import PersonImg from './../../assets/images/main/person-img.jpg';
import Posts from './posts/Posts';
import {ActionTypes, ProfilePageType} from "../../redux/state";
import ProfileFormContainer from "./profileForm/ProfileFormContainer";

export type PropsType = {
    dispatch: (action: ActionTypes) => void
    profilePage: ProfilePageType
}

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
                <ProfileFormContainer
                    dispatch={props.dispatch}
                    profilePage={props.profilePage}
                />
            <Posts postsState={props.profilePage.posts}/>
        </main>
    );
}

export default Profile;