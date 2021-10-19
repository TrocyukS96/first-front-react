import {connect} from 'react-redux';
import {addTask, changePostText, setUsersProfile} from "../../redux/ProfileReducer";
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
}

type MapDispatchToPropsType = {
    addTask: () => void
    changePostText: (newText: string) => void
    setUsersProfile: (profile: any) => void

}
const mapStateToProps = (state: AppRootType): MapStateToPropsType => {
    return {
        newPostValue: state.profilePage.newPost,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}
export default compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootType>(mapStateToProps, {
        addTask,
        changePostText,
        setUsersProfile,
    }),
    withRouter,
    WithAuthRedirect
)(ProfileAPI)

