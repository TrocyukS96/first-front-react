import React, {useState} from "react";
import s from './ProfileDescription.module.css';
import {ProfileType} from "../Profile";
import {ProfileForm} from "../profileForm/ProfileForm";
import {Contacts} from "../contacts/Contacts";

type ProfileDescriptionPropsType = {
    profile: ProfileType,
    isOwner: boolean,
    status: string,
    updateStatus:(status:string)=>void
    updateProfile:(values:any)=>void
}
export const ProfileDescription = (props: ProfileDescriptionPropsType) => {
    const [editMode, setEditMode] = useState(false)
    const onClickOpenEditMode = () => {
        setEditMode(true)
    }
    const onClickCloseEditMode = () => {
        setEditMode(false)
    }
    return (
        <>{editMode
            ? <ProfileForm updateProfile={props.updateProfile} closeEditMode={onClickCloseEditMode} profile={props.profile}/>
            : <Contacts
                profile={props.profile}
                isOwner={props.isOwner}
                openEditMode={onClickOpenEditMode}
                status={props.status}
                updateStatus={props.updateStatus}
            />
        }
        </>
    )
}



