import {ActionTypes, dialogsPageType, MessageType} from "./state";
import smilik from './../assets/images/dialogs/smilik.jpg';


export const dialogsReducer = (state: dialogsPageType, action: ActionTypes) => {
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