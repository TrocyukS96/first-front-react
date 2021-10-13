import React from "react";
import {Preloader} from "../preloader/Preloader";
import {Users} from "./Users";

class UsersAPI extends React.Component <any> {
    componentDidMount() {
        // this.props.toggleFetching(true)
        // usersApi.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     })
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onSetCurrentPage(currentPage: number) {
        // this.props.toggleFetching(true)
        // this.props.setCurrentPage(currentPage)
        // usersApi.getUsers(currentPage, this.props.pageSize)
        //
        //     .then(data => {
        //             console.log(data.users)
        //             this.props.toggleFetching(false)
        //             this.props.setUsers(data.users)
        //         }
        //     )
        this.props.getUsersThunk(currentPage, this.props.pageSize)

    }

    render() {
        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/> : null}
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
            </>

        )
    }
}

export default UsersAPI;