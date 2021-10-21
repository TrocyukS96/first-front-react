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
    newPost: '123',
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
type addTaskAT = ReturnType<typeof addTask>
type ChangePostTextAT = ReturnType<typeof changePostText>
type getUsersProfileAT = ReturnType<typeof getUsersProfile>
type setStatusAT = ReturnType<typeof setStatus>

type ActionsType = addTaskAT | ChangePostTextAT | getUsersProfileAT | setStatusAT


export const profileReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "ADD-TASK": {
            const newPost: StatePostType = {
                id: new Date().getTime(),
                text: state.newPost,
                img: PostLogo,
                likeCount: 0
            }
            return {...state, posts: [...state.posts, newPost]}

        }
        case "CHANGE-POST-TEXT": {
            return {...state, newPost: action.newText}
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
export const addTask = () => {

    return ({type: 'ADD-TASK'} as const)

}                                                ///возвращаемое значение мы типизируем после круглых кавычек в функциях
export const changePostText = (newText: string) => {
    return {
        type: "CHANGE-POST-TEXT",
        newText
    } as const
}
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

