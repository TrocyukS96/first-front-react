import PostLogo from "../assets/images/main/profile/logo1.jpg";
import {ActionTypes, MessageType, ProfilePageType, StatePostType} from "./state";


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
    newPost: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes) => {

    if (action.type === "ADD-TASK") {
        const newPost: StatePostType = {
            id: new Date().getTime(),
            text: state.newPost,
            img: PostLogo,
            likeCount: 0
        }
        if (state.newPost) {
            state.posts.push(newPost)
            state.newPost = ''
        }
    } else if (action.type === "CHANGE-POST-TEXT") {
        state.newPost = action.newText
    }
    return state
}