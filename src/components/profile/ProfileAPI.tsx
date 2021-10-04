import React from "react";
import Profile from "./Profile";
import {profileAPI} from "../api/api";

class ProfileAPI extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        profileAPI.setUsers(userId)
            .then(data => {
                this.props.setUsersProfile(data)
            })
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
            />
        )
    }
}

export default ProfileAPI;