import PostLogo from "../assets/images/main/profile/logo1.jpg";
import {ProfilePageType, StatePostType} from "./state";

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
    profile:{
        aboutMe: 'I/m Stanislav',
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
        userId: 1234,
        photos: {
            small: null,
            large: null
        }
    }
} as ProfilePageType



type addTaskAT = ReturnType<typeof addTask>
type ChangePostTextAT = ReturnType<typeof changePostText>
type setUsersProfileAT = ReturnType<typeof setUsersProfile>

type ActionsType = addTaskAT | ChangePostTextAT | setUsersProfileAT


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
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
        case "SET-USERS-PROFILE":{
            return {...state, profile:action.profile}
        }
        default:
            return state
    }
}
export const addTask = () =>{

    return({type: 'ADD-TASK'} as const)

}                                                ///возвращаемое значение мы типизируем после круглых кавычек в функциях
export const changePostText = (newText: string) => {
    return {
        type: "CHANGE-POST-TEXT",
        newText
    } as const
}
export const setUsersProfile = (profile:any) => {
    return {
        type:"SET-USERS-PROFILE",
        profile
    }as const
}

