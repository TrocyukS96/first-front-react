import {ActionTypes, dialogsPageType, MessageType} from "./state";
import smilik from './../assets/images/dialogs/smilik.jpg';
import kazak from "../assets/images/dialogs/kazak.jpg";
import gentlemen from "../assets/images/dialogs/jentlemen.jpg";


const initialState = {
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

export const dialogsReducer = (state: dialogsPageType = initialState, action: ActionTypes) => {
    if (action.type === "ADD-DIALOGS-MESSAGE") {
        const newMessage: MessageType = {
            id: new Date().getTime(),
            name:state.messages[1].name,
            text: state.newMessage,
            img: smilik

        }
        if (state.newMessage) {
            state.messages.push(newMessage)
            state.newMessage = ''
        }
    }else if(action.type === "CHANGE-DIALOGS-MESSAGE"){
        state.newMessage = action.newDialogsText
    }
    return state
}