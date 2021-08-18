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
    _subscriber:()=>void
    _state:StateType
    getState:()=>void
    addTask:()=>void
    changeNewPostText:(newPostText: string)=>void
    subscribe:(observer:any)=>void
}

export let store = {
    _subscriber() {
        console.log('no subscribers (observers)')
    },
    _state:{
        profilePage:<ProfilePageType> {
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
        dialogsPage:<dialogsPageType> {
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
    addTask(){
        const newPost: StatePostType = {
            id: new Date().getTime(),
            text: this._state.profilePage.newPost,
            img: PostLogo,
            likeCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPost = ''
        rerenderEntireTree(this)
    },
    changeNewPostText(newPostText: string){
        this._state.profilePage.newPost = newPostText
        rerenderEntireTree(this)
    },
    subscribe(observer:any) {
        this._subscriber = observer;
    },
}


// let state = store.getState()

// export let addPostTask = () => {
//     const newPost: StatePostType = {
//         id: new Date().getTime(),
//         text: state.profilePage.newPost,
//         img: PostLogo,
//         likeCount: 0
//     }
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPost = ''
//     rerenderEntireTree(state)
// }
//
// export const changeNewPostText = (newPostText: string) => {
//     state.profilePage.newPost = newPostText
//     rerenderEntireTree(state)
// }
// export const subscribe = (observer: any) => {
// }
//
