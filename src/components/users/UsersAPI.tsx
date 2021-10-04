import React from "react";
import {Preloader} from "../preloader/Preloader";
import {Users} from "./Users";
import {usersApi} from "../api/api";

class UsersAPI extends React.Component <any> {
    componentDidMount() {
        this.props.toggleFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onSetCurrentPage(currentPage: number) {
        this.props.toggleFetching(true)
        this.props.setCurrentPage(currentPage)
        usersApi.getUsers(currentPage, this.props.pageSize)
            .then(data => {
                    this.props.toggleFetching(false)
                    this.props.setUsers(data.items)
                }
            )

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
                    togglefollowingInProgress={this.props.togglefollowingInProgress}
                    followInProgress={this.props.followInProgress}

                />
            </>

        )
    }
}

export default UsersAPI;