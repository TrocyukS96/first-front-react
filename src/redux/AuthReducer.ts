import {Dispatch} from "redux";
import {authAPI} from "../components/api/api";

type AuthType = {
    id: any,
    email: any,
    login: any,
    isAuth:boolean

}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}
type setAuthUsersDataAT = ReturnType<typeof setAuthUsersData>

type ActionsType = setAuthUsersDataAT
export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case "SET_AUTH_USERS_DATA": {
            return {
                ...state, ...action.data,
                isAuth:true
            }
        }

        default:
            return state
    }
}
export const setAuthUsersData = (id: any, email: any, login: any) => {
    return ({type: "SET_AUTH_USERS_DATA", data: {id, email, login}} as const)

}


export const getAuthData = () => (dispatch:Dispatch) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data
                dispatch(setAuthUsersData(id, email, login))
            }
        })
}

///возвращаемое значение мы типизируем после круглых кавычек в функциях
