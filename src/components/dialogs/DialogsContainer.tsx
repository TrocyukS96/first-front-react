import {AppRootType} from "../../redux/redux-store";
import {addMessage, changeMessage} from "../../redux/DialogsReducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import  {ComponentType} from "react";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    messages: any[],
    newPost: string,
}
type MapDispatchToPropsType = {
    addMessage: () => void,
    changeMessage: (newMessage: string) => void
}

const mapStateToProps = (state: AppRootType): MapStateToPropsType => {
    return {
        messages: state.dialogsPage.messages,
        newPost: state.dialogsPage.newMessage,
    }
}
    export default compose<ComponentType>(
        connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootType>(mapStateToProps, {
            addMessage,
            changeMessage
        }),
        WithAuthRedirect
    )(Dialogs)

