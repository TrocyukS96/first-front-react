import PostLogo from "../assets/images/main/profile/logo1.jpg";
import {ActionTypes, MessageType, ProfilePageType, StatePostType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionTypes) => {

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