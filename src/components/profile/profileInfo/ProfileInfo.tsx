import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileImg from './../../../assets/images/main/main-img.jpg';
import {ProfileType} from '../Profile';
import {Preloader} from "../../preloader/Preloader";

type ProfileInfoPropsType = {
    profile: ProfileType
}

function ProfileInfo(props: ProfileInfoPropsType) {
    if(!props.profile){
        return <Preloader/>
    }

    var data = {
        "name 1":"a",
        "name 2":"b",
        "name 3":"b",
    };
    var contacts = [...Object.values(props.profile.contacts), ...Object.keys(props.profile.contacts)]
    const contactsMap = contacts.map((m,i)=>{
        return(
            <li key={i}>{m}</li>
        )
    })
    return (
        <div >
            <img className={s.profileImg} src={ ProfileImg } alt="profile-image"/>
            <div className={s.personBlock}>
                <img className={s.personImg} src={props.profile.photos.small} alt="person-image"/>
                <div className={s.personContent}>
                    <h3 className={s.personTitle}>{props.profile.fullName}</h3>
                    <div className={s.contacts}>
                        <h3>Контакты</h3>
                        <ul>
                            {/*<li><span>Instagram: </span>*/}
                            {/*    <span>{props.profile.contacts.instagram}</span>*/}
                            {/*</li>*/}
                            {contactsMap}
                        </ul>
                        <h3>О себе: <span>{props.profile.aboutMe}</span></h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;

