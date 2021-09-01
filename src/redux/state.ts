import PostLogo from '../assets/images/main/profile/logo1.jpg';

import kazak from './../assets/images/dialogs/kazak.jpg';
import smilik from './../assets/images/dialogs/smilik.jpg';
import gentlemen from './../assets/images/dialogs/jentlemen.jpg';
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: dialogsPageType
}

export type ProfilePageType = {
    posts: StatePostType[],
    newPost: string
}
export type StatePostType = {
    id: number
    text: string
    img: any
    likeCount: number
}

export type dialogsPageType = {
    messages: MessageType[],
    newMessage: string
}
export type MessageType = {
    id: number
    name: string
    text: string
    img: any
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
    _onChange: () => void
    subscribe: (callback: () => void) => void

}
type AddTaskActionType = ReturnType<typeof addTaskAC>
type ChangePostTextType = ReturnType<typeof ChangePostTextAC>
type addDialogsTextAC = ReturnType<typeof addDialogsTextAC>
type changeDialogsTextAC = ReturnType<typeof changeDialogsTextAC>


export const addTaskAC = () => ({type: "ADD-TASK"} as const)             ///возвращаемое значение мы типизируем после круглых кавычек в функциях

export const ChangePostTextAC = (newText: string) => {
    return {
        type: "CHANGE-POST-TEXT",
        newText: newText
    } as const
}

export const changeDialogsTextAC = (newDialogsText: string) => {
    return {
        type: "CHANGE-DIALOGS-MESSAGE",
        newDialogsText: newDialogsText
    } as const
}
export const addDialogsTextAC = () => ({type: "ADD-DIALOGS-MESSAGE"} as const)

export type ActionTypes = ReturnType<typeof addTaskAC> |
    ReturnType<typeof ChangePostTextAC> |
    ReturnType<typeof addDialogsTextAC> |
    ReturnType<typeof changeDialogsTextAC>



export let store: StoreType = {
    _state: {
        profilePage: {
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
                    id: 4, text: "My first message for today", img: PostLogo, likeCount: 12
                }

            ],
            newPost: ''
        },
        dialogsPage: {
            messages: [
                {
                    id: 1110, name: 'Stas', text: "My first post for today", img: kazak
                },
                {
                    id: 1111, name: 'Ivan', text: "Other message", img: gentlemen
                },
                {
                    id: 1112, name: 'Stas', text: "Im learning front-end", img: smilik
                },
                {
                    id: 1113, name: 'Stas', text: "My first post for today", img: gentlemen
                }

            ],
            newMessage: '123'
        }
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._onChange()
    },
    _onChange() {   //вообще не нужен, тупо отрисовывает изменение state
        console.log('state changed')
    },
    subscribe(callback) {    //подписывается на событие в зависимости от callback
        this._onChange = callback;
    },

}
