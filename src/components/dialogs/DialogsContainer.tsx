import {AppRootType} from "../../redux/redux-store";
import {addMessage} from "../../redux/DialogsReducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {ComponentType} from "react";
import {WithAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getMessages, getPost} from "../../selectors/dialogs-selector";

type MapStateToPropsType = {
    messages: any[],
    newPost: string,
}
type MapDispatchToPropsType = {
    addMessage: (newMessage:string) => void,
    // changeMessage: (newMessage: string) => void
}

const mapStateToProps = (state: AppRootType): MapStateToPropsType => {
    return {
        messages: getMessages(state),
        newPost: getPost(state),
    }
}
    export default compose<ComponentType>(
        connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootType>(mapStateToProps, {
            addMessage,
            // changeMessage
        }),
        WithAuthRedirect
    )(Dialogs)

