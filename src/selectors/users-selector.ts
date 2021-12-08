import {createSelector} from "reselect";
import {UserType} from "../redux/UsersReducer";
import {getUsersSelector} from "../redux/users-selectors";

export const getUsers= createSelector(getUsersSelector, (users:any)=> {
    return users.filter((u:UserType) => true)
})


export const getPageSize = (state:any)=>{
    return state.usersPage.pageSize
}

export const getTotalCount = (state:any)=>{
    return state.usersPage.totalCount
}

export const getCurrentPage = (state:any)=>{
    return state.usersPage.currentPage
}

export const getFetch = (state:any)=>{
    return state.usersPage.isFetching
}

export const getFollowInProgress = (state:any)=>{
    return state.usersPage.followInProgress
}