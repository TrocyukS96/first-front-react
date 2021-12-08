import React, {ComponentType} from 'react';
import {AppRootType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    followUser,
    followUserThunk,
    getUsersThunk,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFetching,
    toggleFollowingInProgress,
    UnfollowUser,
    unFollowUserThunk,
    UserType
} from "../../redux/UsersReducer";
import UsersAPI from "./UsersAPI";
import {compose} from "redux";
import {
    getCurrentPage,
    getFetch,
    getFollowInProgress,
    getPageSize,
    getTotalCount,
    getUsers
} from "../../selectors/users-selector";


type MapStateToPropsType = {
    users: UserType,
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
    followInProgress: []

}

type MapDispatchToProps = {
    followUser: (usersID: string) => void,
    UnfollowUser: (usersID: string) => void,
    setUsers: (newUsers: UserType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (usersCount: number) => void,
    toggleFetching: (isFetching: boolean) => void,
    toggleFollowingInProgress: (isFetching: boolean, id: number) => void
    getUsersThunk: (currentPage: number, pageSize: number) => void
    followUserThunk: (userId: any) => void
    unFollowUserThunk: (userId: any) => void

}
const mapStateToProps = (state: any): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetch(state),
        followInProgress: getFollowInProgress(state),
    }
}
export default compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToProps, {}, AppRootType>(mapStateToProps, {
        followUser,
        UnfollowUser,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleFetching,
        toggleFollowingInProgress,
        getUsersThunk,
        followUserThunk,
        unFollowUserThunk
    }),
)(UsersAPI)

