import React, {ComponentType} from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import {TrainingContainer} from "./components/training/Training";
import {HeaderContainer} from './components/header/HeaderContainer';
import Login from "./components/login/LoginForm";
import {connect} from "react-redux";
import {AppRootType} from "./redux/redux-store";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./components/preloader/Preloader";
import {WithSuspense} from "./components/hoc/WithSuspense";
const DialogsContainer = React.lazy(() => import("./components/dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/users/UsersContainer"));
class App extends React.Component<any, any> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>

                    <div className="app-wrapper">

                        <HeaderContainer/>
                        <Route path={"/Profile/:userId?"}
                               render={WithSuspense(
                                   ProfileContainer)}/>
                        <Route path={"/Dialogs"}
                               render={WithSuspense(DialogsContainer)}/>
                        <Route path={"/Training"}
                               render={() => <TrainingContainer/>}/>
                        <Route path={"/Users"}
                               render={WithSuspense(UsersContainer)}/>
                        <Route path={"/Login"}
                               render={() => <Login/>}/>
                        <Redirect from='/' to='/Profile'/>
                        <Sidebar/>
                    </div>
            </BrowserRouter>
        )
    }
}

type MapDispatchToPropsType = {
    initializeApp: () => void,
}
type MapStateToPropsType = {
    initialized: boolean
}
const mapStateToProps = (state: AppRootType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}
export default compose<ComponentType>(
    withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootType>(mapStateToProps, {initializeApp}),
)(App)

