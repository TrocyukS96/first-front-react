import {AppRootType} from "./redux-store";
import {createSelector} from "reselect";
import {UserType} from "./UsersReducer";

export const getUsersSelector = (state:AppRootType) => {
    //@ts-ignore
    return state.usersPage.users
}

