import PostLogo from "../assets/images/main/profile/logo1.jpg";
import {StatePostType} from "./state";
import {Dispatch} from "redux";
import {NewProfileDataType, profileAPI} from "../components/api/api";
import {AppRootType} from "./redux-store";
import {ThunkAction} from 'redux-thunk';

const initialState = {
    posts: [
        {
            id: 1,
            text: "Ab, aliquid magnam officiis porro quod ullam veritatis.officiis porro quod",
            img: PostLogo,
            likeCount: 2
        },
        {
            id: 2, text: "Ab, aliquid magnam officiis porro", img: PostLogo, likeCount: 4
        },
        {
            id: 3, text: "Ab, aliquid magnam officiis porro quod ullam veritatis.", img: PostLogo, likeCount: 6
        },
        {
            id: 4, text: "My first dialogsMessage for today", img: PostLogo, likeCount: 12
        }

    ],
    profile: {
        aboutMe: 'Im Stanislav',
        contacts: {
            facebook: 'nope',
            website: 'https://vk.com/id299281641',
            vk: 'https://vk.com/id299281641',
            twitter: '123',
            instagram: 'https://www.instagram.com/',
            youtube: 'https://www.youtube.com/',
            github: 'https://github.com/TrocyukS96',
            mainLink: ''
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'wanna find a better job ',
        fullName: 'Stanislav',
        userId: 19549,
        photos: {
            small: null as null | string,
            large: null as null | string
        },


    },
    status: ''
}


export const profileReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "ADD-POST-TEXT": {
            const newPost: StatePostType = {
                id: new Date().getTime(),
                text: action.newPostText,
                img: PostLogo,
                likeCount: 0
            }
            return {...state, posts: [...state.posts, newPost]}

        }
        case "SET-STATUS": {
            debugger
            return {...state, status: action.status}
        }
        case "SET-USERS-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SAVE-PHOTO-SUCESS": {
            return {...state, profile: {...state.profile, photos: {...action.photos}}}
        }
        default:
            return state
    }
}

//actions
export const addPostText = (newPostText: string) => {
    return ({type: 'ADD-POST-TEXT', newPostText} as const)
}                                                ///возвращаемое значение мы типизируем после круглых кавычек в функциях
export const getUsersProfile = (profile: any) => {
    return {
        type: "SET-USERS-PROFILE",
        profile
    } as const
}
export const setStatus = (status: string) => {
    debugger
    return {
        type: "SET-STATUS",
        status
    } as const
}
export const savePhotoSuccess = (photos: { large: string, small: string }) => {
    return {
        type: "SAVE-PHOTO-SUCESS",
        photos
    } as const
}

//thunks
export const getUsers = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.setUsers(userId).then(response => {
        dispatch(getUsersProfile(response.data))
    })
}

export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    debugger
    profileAPI.getStatus(userId).then(response => {
        debugger
        dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    try {

        let res = await profileAPI.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (e) {
        console.log(e)
    }


}
export const savePhoto = (photo: any) => async (dispatch: Dispatch) => {
    try {

        let res = await profileAPI.savePhoto(photo)
        dispatch(savePhotoSuccess(res.data.data.photos))
    } catch (e) {
        console.log(e)
    }
}
export const updateProfile = (profileData: any): ThunkType => async (dispatch, getState: () => AppRootType) => {
    try {
        debugger
        const userId = getState().auth.id
        const {about, fullName, lookingForAJob, skillsDescription, contacts} = profileData
        console.log(profileData)
        let newProfileData: NewProfileDataType = {
            AboutMe: about,
            userId: userId,
            lookingForAJob: lookingForAJob,
            lookingForAJobDescription: skillsDescription,
            fullName: fullName,
            contacts: {...contacts}
        }

        const res = await profileAPI.updateProfile(newProfileData)
        dispatch(getUsers(userId))
    } catch (e) {
        console.log(e)
    }
}
//types
type initialStateType = typeof initialState
type addPostTextAT = ReturnType<typeof addPostText>
type getUsersProfileAT = ReturnType<typeof getUsersProfile>
type setStatusAT = ReturnType<typeof setStatus>

type ActionsType =
    addPostTextAT
    | getUsersProfileAT
    | setStatusAT
    | ReturnType<typeof savePhotoSuccess>

type ThunkType = ThunkAction<any, AppRootType, {}, ActionsType>
