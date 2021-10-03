import React from 'react';
import {AppRootType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    followUser,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFetching, UnfollowUser,
    UserType
} from "../../redux/UsersReducer";
import UsersAPI from "./UsersAPI";


type MSTPType = {
    users: UserType[],
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean
}

type MDTPType = {
    followUser: (usersID: string) => void,
    UnfollowUser: (usersID: string) => void,
    setUsers: (newUsers: UserType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (usersCount: number) => void,
    toggleFetching: (isFetching: boolean) => void

}
type PropsType = MSTPType & MDTPType
const mapStateToProps = (state: any): MSTPType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }

}
export const UsersContainer = connect<MSTPType, MDTPType, {}, AppRootType>(mapStateToProps, {
    followUser,
    UnfollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFetching
})(UsersAPI);

