import {connect} from 'react-redux';
import {addTask, changePostText, getStatus, getUsers, updateStatus} from "../../redux/ProfileReducer";
import {AppRootType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";
import ProfileAPI from './ProfileAPI';
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";
import {ComponentType} from "react";

export type PostType = {
    id: number
    text: string
    img: any
    likeCount: number
}

type MapStateToPropsType = {
    newPostValue: string
    posts: PostType[]
    profile: any
    status:string
    userId:number
}

type MapDispatchToPropsType = {
    addTask: () => void
    changePostText: (newText: string) => void
    getUsers: (userId:number) => void
    getStatus: (userId:number) => void
    updateStatus: (status:string) => void

}
const mapStateToProps = (state: AppRootType): MapStateToPropsType => {
    return {
        newPostValue: state.profilePage.newPost,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status:state.profilePage.status,
        userId: state.profilePage.profile.userId
    }
}
export default compose<ComponentType>(
    withRouter,
    WithAuthRedirect,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootType>(mapStateToProps, {
        addTask,
        changePostText,
        getUsers,
        getStatus,updateStatus
    })

)(ProfileAPI)

