import React from "react";
import { profileAPI } from "../api/api";
import Profile from "./Profile";

class ProfileAPI extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        console.log(userId)
        profileAPI.setUsers(userId)
            .then(data => {
                this.props.setUsersProfile(data)
            })
        // this.props.getProfile(userId)
    }

    render() {
        return (
            <Profile
                newPostValue={this.props.newPostValue}
                profile={this.props.profile}
                posts={this.props.posts}
                addTask={this.props.newPostValue}
                changePostText={this.props.changePostText}
                setUsersProfile={this.props.setUsersProfile}
                isAuth={this.props.isAuth}
            />
        )
    }
}

export default ProfileAPI;