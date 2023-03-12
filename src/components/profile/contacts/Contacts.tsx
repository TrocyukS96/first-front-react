import {ProfileType} from "../Profile";
import s from "./contacts.module.scss";
import React from "react";
import {Contact} from './contact/Contact';
import {ProfileStatus} from "../profileStatus/ProfileStatus";

type ContactsPropsType = {
    profile: ProfileType,
    isOwner: boolean,
    openEditMode: () => void,
    status: string,
    updateStatus: (status: string) => void

}
export const Contacts = (props: ContactsPropsType) => {
    const {profile, isOwner, openEditMode, status, updateStatus} = props
    return (<>
            <div className={s.contacts}>
                <h2>{profile.fullName}</h2>
                <div className={s.contacts__info}>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                    <h4 className={s.about__title}>Обо мне: <span>{profile.aboutMe}</span></h4>
                    <div><b>Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</b></div>
                    <div><b>My skills
                        description: {profile.lookingForAJobDescription ? profile.lookingForAJobDescription : 'no information yet'}</b>
                    </div>
                    <div><b>Contacts</b>:{Object.keys(profile.contacts).map((key: string, i:number) => {
                        // @ts-ignore
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                    </div>
                </div>
            </div>
            {isOwner && <button onClick={openEditMode}>Edit</button>}

        </>
    )
}