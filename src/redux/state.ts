import PostLogo from '../assets/images/main/profile/logo1.jpg';

import kazak from './../assets/images/dialogs/kazak.jpg';
import smilik from './../assets/images/dialogs/smilik.jpg';
import gentlemen from './../assets/images/dialogs/jentlemen.jpg';
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import trainingReducer from './TrainingReducer';

export const addTrainTask = 'ADD_TRAIN_TASK';
export const changeTrainTask = 'CHANGE_TRAIN_TASK';
export const addTask = 'ADD-TASK';
export const addDialogsMessage = 'ADD-DIALOGS-MESSAGE';
export const changePostText = 'CHANGE-POST-TEXT';
export const changeDialogsMessage = 'CHANGE-DIALOGS-MESSAGE';

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: dialogsPageType
    trainingPage: TrainingPageType
}

export type ProfilePageType = {
    posts: StatePostType[]
    newPost: string
}
export type StatePostType = {
    id: number
    text: string
    img: any
    likeCount: number
}
export type TrainingTaskType = {
    id: number
    title: string
    descriptions: string
    score: number
}
export type TrainingPageType = {
    tasks: TrainingTaskType[]
    newTask: string
}

export type dialogsPageType = {
    messages: MessageType[]
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
    dispatch: (action: any) => void
    _onChange: () => void
    subscribe: (callback: () => void) => void

}
 type addTaskAT = ReturnType<typeof addTaskAC>
 type ChangePostTextAT = ReturnType<typeof ChangePostTextAC>
 type addDialogsTextAT = ReturnType<typeof addDialogsTextAC>
 type changeDialogsTextAT = ReturnType<typeof changeDialogsTextAC>
 type addTrainingTextAT = ReturnType<typeof AddTrainingTaskAC>
 type changeTrainingTextAT = ReturnType<typeof ChangeTrainingTaskTextAC>


 const addTaskAC = () => ({type: 'ADD-TASK'} as const)             ///возвращаемое значение мы типизируем после круглых кавычек в функциях
 const ChangePostTextAC = (newText: string) => {
    return {
        type: "CHANGE-POST-TEXT",
        newText:newText
    } as const
}

 const changeDialogsTextAC = (newDialogsText: string) =>
     ({
        type: changeDialogsMessage,
        newDialogsText: newDialogsText
    } as const)

 const addDialogsTextAC = () => ({type: addDialogsMessage} as const)
 const AddTrainingTaskAC = () =>
   ({
        type:addTrainTask
    } as const)

 const ChangeTrainingTaskTextAC = (newTask:string) =>
   ({
        type:changeTrainTask,
        newTask: newTask
    } as const
)


export type ActionTypes =
    addTaskAT |
    ChangePostTextAT |
    addDialogsTextAT |
    addTrainingTextAT |
    changeTrainingTextAT |
    changeDialogsTextAT


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
                    id: 4, text: "My first dialogsMessage for today", img: PostLogo, likeCount: 12
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
                    id: 1111, name: 'Ivan', text: "Other dialogsMessage", img: gentlemen
                },
                {
                    id: 1112, name: 'Stas', text: "Im learning front-end", img: smilik
                },
                {
                    id: 1113, name: 'Stas', text: "My first post for today", img: gentlemen
                }

            ],
            newMessage: '123'
        },
        trainingPage: {
            tasks: [
                {id: 1, title: 'English', descriptions: 'like to learn it in free time', score: 123},
                {id: 2, title: 'FrontEnd', descriptions: 'wanna improve my skills in this area', score: 444},
                {id: 3, title: 'Sport', descriptions: 'Its useful; for health', score: 346}
            ],
            newTask: 'Maybe dancing'
        }
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.trainingPage = trainingReducer(this._state.trainingPage, action);
        this._onChange()
    },
    _onChange() {
        console.log('state changed')
    },
    subscribe(callback) {    //подписывается на событие в зависимости от callback
        this._onChange = callback;
    }

}
