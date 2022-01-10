import {Dispatch} from "redux";
import {authAPI} from "../components/api/api";
import {stopSubmit} from "redux-form";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null as null | string // if null captcha is not required
}

export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case 'AUTH-SET-USERS_DATA': {
            return {
                ...state, ...action.payload,
            }
        }
        case "AUTH-SET-CAPTCHA-DATA": {
            return {
                ...state, captcha:action.url
            }
        }
        default:
            return state
    }
}
//actions
export const authSetUsersData = (id: any, email: any, login: any, isAuth: boolean) => {
    return ({type: "AUTH-SET-USERS_DATA", payload: {id, email, login, isAuth}} as const)

}
const authSetCaptchaData = (url: string) => {
    return ({type: "AUTH-SET-CAPTCHA-DATA", url} as const)

}
//thunks
export const getAuthData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(data => {
            if (data.resultCode === 0) {
                let {email, id, login} = data.data
                dispatch(authSetUsersData(id, email, login, true))
            }
        })
}
export const getCaptcha = () => async (dispatch: Dispatch) => {
    try {
        const res = await authAPI.captcha()
        dispatch(authSetCaptchaData(res.data.url))

    } catch (e) {

    }
}
export const login = (email: string, password: string, rememberMe: boolean = false, captcha?:string | null) => (dispatch: any) => {
    authAPI.loginUser(email, password, rememberMe, captcha)
        .then(response => {
            if (response.data.resultCode === 0) {

                dispatch(getAuthData())

            }
            else if (response.data.resultCode === 10) {
                dispatch(getCaptcha())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages : 'some Error'
                dispatch(stopSubmit('loginForm', {_error: message}))
            }
        })
}
export const logOut = () => (dispatch: Dispatch) => {
    authAPI.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {

                dispatch(authSetUsersData(null, null, null, false))
            }
        })
}

///возвращаемое значение мы типизируем после круглых кавычек в функциях

//types

type ActionsType =
    ReturnType<typeof authSetUsersData>
    | ReturnType<typeof authSetCaptchaData>
type AuthType = {
    id: any,
    email: any,
    login: any,
    isAuth: boolean,
    captcha: null | string


}