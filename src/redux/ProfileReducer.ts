import PostLogo from "../assets/images/main/profile/logo1.jpg";
import {StatePostType} from "./state";
import {Dispatch} from "redux";
import {profileAPI} from "../components/api/api";

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
        userId: 1,
        photos: {
            small: null,
            large: null
        },


    },
    status: 'hello, guys'
}
type initialStateType = typeof initialState
type addPostTextAT = ReturnType<typeof addPostText>
type getUsersProfileAT = ReturnType<typeof getUsersProfile>
type setStatusAT = ReturnType<typeof setStatus>

type ActionsType = addPostTextAT | getUsersProfileAT | setStatusAT


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
            return {...state, status: action.status}
        }
        case "SET-USERS-PROFILE": {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}
export const addPostText = (newPostText:string) => {

    return ({type: 'ADD-POST-TEXT', newPostText} as const)

}                                                ///возвращаемое значение мы типизируем после круглых кавычек в функциях

export const getUsersProfile = (profile: any) => {
    return {
        type: "SET-USERS-PROFILE",
        profile
    } as const
}

export const setStatus = (status: any) => {
    return {
        type: "SET-STATUS",
        status
    } as const
}
export const getUsers = (userId:number) => (dispatch:Dispatch)=>{
    profileAPI.setUsers(userId).then(response =>{

        dispatch(getUsersProfile(response.data))
    })
}

export const getStatus = (userId:number) => (dispatch:Dispatch)=>{
    profileAPI.getStatus(userId).then(response =>{

        dispatch(setStatus(response.statusText))
    })
}
export const updateStatus = (status:string) => (dispatch:Dispatch)=>{
    profileAPI.updateStatus(status).then(response =>{
        if(response.data.resultCode===0){
            dispatch(setStatus(status))
        }
    })
}

