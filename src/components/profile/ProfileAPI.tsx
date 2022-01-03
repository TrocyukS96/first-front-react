import React from "react";
import Profile from "./Profile";

class ProfileAPI extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = this.props.userId
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUsers(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile
                newPostValue={this.props.newPostValue}
                profile={this.props.profile}
                posts={this.props.posts}
                addPostText={this.props.addPostText}
                setUsersProfile={this.props.setUsersProfile}
                isAuth={this.props.isAuth}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

export default ProfileAPI;