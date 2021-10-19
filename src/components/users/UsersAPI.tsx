import React from "react";
import {Users} from "./Users";

class UsersAPI extends React.Component <any> {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onSetCurrentPage(currentPage: number) {
        this.props.getUsersThunk(currentPage, this.props.pageSize)
    }

    render() {
        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        return (
                <Users
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    setCurrentPage={this.props.setCurrentPage}
                    setUsers={this.props.setUsers}
                    users={this.props.users}
                    followUser={this.props.followUser}
                    UnfollowUser={this.props.UnfollowUser}
                    currentPage={this.props.currentPage}
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                    followInProgress={this.props.followInProgress}
                    followUserThunk={this.props.followUserThunk}
                    unFollowUserThunk={this.props.unFollowUserThunk}
                />
        )
    }
}

export default UsersAPI;