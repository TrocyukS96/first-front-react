import {connect} from 'react-redux';
import {addPostText, getUsers, updateStatus, getStatus, savePhoto, updateProfile} from "../../redux/ProfileReducer";
import {AppRootType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";
import ProfileAPI from './ProfileAPI';
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";
import {ComponentType} from "react";
import {getPosts, getProfile, getUserId, getProfileStatus} from "../../selectors/profile-selector";

export type PostType = {
    id: number
    text: string
    img: any
    likeCount: number
}

type MapStateToPropsType = {
    posts: PostType[]
    profile: any
    status:string
    userId:number
}

type MapDispatchToPropsType = {
    addPostText: (newPostText:string) => void
    getUsers: (userId:number) => void
    getStatus: (userId:number) => void
    updateStatus: (status:string) => void
    savePhoto:(photo:any)=>{}
    updateProfile:(values:any)=>void

}
const mapStateToProps = (state: AppRootType): MapStateToPropsType => {
    return {
        posts: getPosts(state),
        profile: getProfile(state),
        status:getProfileStatus(state),
        userId: getUserId(state)
    }
}

export default compose<ComponentType>(
    withRouter,
    WithAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootType>(mapStateToProps, {
        addPostText,
        getUsers,
        getStatus,updateStatus, savePhoto, updateProfile
    })

)(ProfileAPI)

