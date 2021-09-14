import PostLogo from "../assets/images/main/profile/logo1.jpg";
import {
    ProfilePageType,
    StatePostType
} from "./state";

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
    newPost: '123'
} as ProfilePageType

export const addTaskAC = () =>{

    return({type: 'ADD-TASK'} as const)

}                                                ///возвращаемое значение мы типизируем после круглых кавычек в функциях
export const ChangePostTextAC = (newText: string) => {
    return {
        type: "CHANGE-POST-TEXT",
        newText: newText
    } as const
}

type addTaskAT = ReturnType<typeof addTaskAC>
type ChangePostTextAT = ReturnType<typeof ChangePostTextAC>

type ActionsType = addTaskAT | ChangePostTextAT


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
        default:
            return state
    }
}
