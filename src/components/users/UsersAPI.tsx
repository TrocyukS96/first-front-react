import React from "react";
import axios from "axios";
import {Preloader} from "../preloader/Preloader";
import {Users} from "./Users";

class UsersAPI extends React.Component <any> {
    componentDidMount() {
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onSetCurrentPage(currentPage: number) {
        this.props.toggleFetching(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.data.items)
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
                    currentPage={this.props.currentPage}
                />
            </>

        )
    }
}

export default UsersAPI;