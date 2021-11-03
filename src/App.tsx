import React, {ComponentType} from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import {BrowserRouter, Redirect, Route, withRouter} from "react-router-dom";
import {TrainingContainer} from "./components/training/Training";
import ProfileContainer from "./components/profile/ProfileContainer";
import {HeaderContainer} from './components/header/HeaderContainer';
import UsersContainer from "./components/users/UsersContainer";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import Login from "./components/login/LoginForm";
import {connect} from "react-redux";
import {AppRootType} from "./redux/redux-store";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./components/preloader/Preloader";

class App extends React.Component<any, any> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Route path={"/Profile/:userId?"}
                           render={() => <ProfileContainer/>}/>
                    <Route path={"/Dialogs"}
                        // render={() => <Dialogs dialogsPageState={props.state.dialogsPage}/>}/>
                           render={() => <DialogsContainer/>}/>
                    <Route path={"/Training"}
                           render={() => <TrainingContainer/>}/>
                    <Route path={"/Users"}
                           render={() => <UsersContainer/>}/>
                    <Route path={"/Login"}
                           render={() => <Login/>}/>

                    {/*<Route path={"/Messages"} render = {() => <News/>  } />*/}
                    {/*<Route path={"/Messages"} render = {() => <Settings/>  } />*/}
                    <Redirect from='/' to='/Profile'/>
                    <Sidebar/>
                </div>
            </BrowserRouter>
        )
    }
}
type MapDispatchToPropsType = {
    initializeApp:()=>void,
}
type MapStateToPropsType = {
    initialized:boolean
}
const mapStateToProps = (state:AppRootType):MapStateToPropsType=>{
  return{
      initialized:state.app.initialized
  }
}
export default compose<ComponentType>(
    withRouter,
    connect<MapStateToPropsType,MapDispatchToPropsType, {}, AppRootType>(mapStateToProps,{initializeApp}),
)(App)

