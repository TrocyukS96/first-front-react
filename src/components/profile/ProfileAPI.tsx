import React from "react";
import Profile from "./Profile";
import axios from "axios";

class ProfileAPI extends React.Component<any, any> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUsersProfile(response.data)
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