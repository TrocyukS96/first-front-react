import React from 'react';
import {connect} from 'react-redux';
import {addTask, changePostText, setUsersProfile} from "../../redux/ProfileReducer";
import {AppRootType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";
import ProfileAPI from './ProfileAPI';

export type PostType = {
    id: number
    text: string
    img: any
    likeCount: number
}

type mstpType = {
    newPostValue: string
    posts: PostType[]
    profile: any

}
type mdtpType = {
    addTask: () => void
    changePostText: (newText: string) => void
    setUsersProfile: (profile: any) => void
}
const mapStateToProps = (state: AppRootType): mstpType => {
    return {
        newPostValue: state.profilePage.newPost,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}

const ProfileUrlDataContainer = withRouter(ProfileAPI) //

export const ProfileContainer = connect<mstpType, mdtpType, {}, AppRootType>(mapStateToProps, {
    addTask,
    changePostText,
    setUsersProfile
})(ProfileUrlDataContainer);

