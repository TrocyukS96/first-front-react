import React from "react";
import Profile from "./Profile";

class ProfileAPI extends React.Component<any, any> {

    refreshProfile(){
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
    componentDidMount() {
        console.log('Profile, componentDidMount')
        this.refreshProfile()
        console.log(this.props.status)
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        console.log('Profile, componentDidUpdate')
        if(this.props.match.params.userId !=prevProps.match.params.userId){
            this.refreshProfile()

        }
    }

    render() {
        return (
            <Profile
                isOwner={!this.props.match.params.userId}
                newPostValue={this.props.newPostValue}
                profile={this.props.profile}
                posts={this.props.posts}
                addPostText={this.props.addPostText}
                setUsersProfile={this.props.setUsersProfile}
                isAuth={this.props.isAuth}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
                updateProfile={this.props.updateProfile}
            />
        )
    }
}

export default ProfileAPI;