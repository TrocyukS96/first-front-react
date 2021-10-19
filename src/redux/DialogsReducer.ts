import {
    addDialogsMessage,
    changeDialogsMessage,
    dialogsPageType,
    MessageType
} from "./state";
import smilik from './../assets/images/dialogs/smilik.jpg';
import kazak from "../assets/images/dialogs/kazak.jpg";
import gentlemen from "../assets/images/dialogs/jentlemen.jpg";


const initialState = {
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
} as dialogsPageType

export const addMessage = () => ({type: addDialogsMessage} as const)
export const changeMessage = (newDialogsText: string) => ({
    type: changeDialogsMessage,
    newDialogsText: newDialogsText
} as const)

type addDialogsTextAT = ReturnType<typeof addMessage>
type changeDialogsTextAT = ReturnType<typeof changeMessage>

type ActionsTypes = addDialogsTextAT | changeDialogsTextAT

export const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {

        case addDialogsMessage: {
            const newMessage: MessageType = {
                id: new Date().getTime(),
                name: state.messages[1].name,
                text: state.newMessage,
                img: smilik
            }
            return {...state, messages: [...state.messages, newMessage]}
        }
        case changeDialogsMessage: {
            return {...state, newMessage: action.newDialogsText}
        }
        default:
            return state
    }
}