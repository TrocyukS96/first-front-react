import React, {useState} from 'react';
import PostLogo from '../assets/images/main/profile/logo1.jpg';
import {rerenderEntireTree} from "../index";

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
}
// export let state = {
//     profilePage: {
//         posts: [
//             {
//                 id: 1,
//                 text: "Ab, aliquid magnam officiis porro quod ullam veritatis.officiis porro quod",
//                 img: PostLogo,
//                 likeCount: 2
//             },
//             {
//                 id: 2, text: "Ab, aliquid magnam officiis porro", img: PostLogo, likeCount: 4
//             },
//             {
//                 id: 3, text: "Ab, aliquid magnam officiis porro quod ullam veritatis.", img: PostLogo, likeCount: 6
//             },
//             {
//                 id: 4, text: "My first message for today", img: PostLogo, likeCount: 12
//             }
//
//         ],
//         newPost: ''
//     },
//     dialogsPage: {
//         messages: [
//             {
//                 id: 1110, name: 'Stas', text: "My first post for today"
//             },
//             {
//                 id: 1111, name: 'Stas', text: "Other message"
//             },
//             {
//                 id: 1112, name: 'Stas', text: "Im learning front-end"
//             },
//             {
//                 id: 1113, name: 'Stas', text: "My first post for today"
//             }
//
//         ],
//         newMessage: '123'
//     }
// }

export type StoreType = {
    _state: StateType
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
    _onChange: () => void
    subscribe: (callback: () => void) => void

}
type AddTaskActionType = ReturnType<typeof addTaskAC>
type ChangePostTextType = ReturnType<typeof ChangePostTextAC>


export const addTaskAC = () => ({type:"ADD-TASK"} as const)             ///возвращаемое значение мы типизируем после круглых кавычек в функциях

export const ChangePostTextAC = (newText: string) => {
    return {
        type: "CHANGE-POST-TEXT",
        newText: newText
    } as const
}

export type ActionTypes = ReturnType<typeof addTaskAC> | ReturnType<typeof ChangePostTextAC>

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
                    id: 1110, name: 'Stas', text: "My first post for today"
                },
                {
                    id: 1111, name: 'Stas', text: "Other message"
                },
                {
                    id: 1112, name: 'Stas', text: "Im learning front-end"
                },
                {
                    id: 1113, name: 'Stas', text: "My first post for today"
                }

            ],
            newMessage: '123'
        }
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        if (action.type === "ADD-TASK") {
            const newPost: StatePostType = {
                id: new Date().getTime(),
                text: this._state.profilePage.newPost,
                img: PostLogo,
                likeCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPost = ''

            this._onChange()
        } else if (action.type === "CHANGE-POST-TEXT") {
            this._state.profilePage.newPost = action.newText
            this._onChange()
        }
    },
    _onChange() {   //вообще не нужен, тупо отрисовывает изменение state
        console.log('state changed')
    },
    subscribe(callback) {    //подписывается на событие в зависимости от callback
        this._onChange = callback;
    },

}
