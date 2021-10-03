import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {DialogsContainer} from './components/dialogs/Dialogs';
import {AppRootType} from "./redux/redux-store";
import {TrainingContainer} from "./components/training/Training";
import {UsersContainer} from './components/users/UsersContainer';
import ProfileAPI from "./components/profile/ProfileAPI";
import {ProfileContainer} from "./components/profile/ProfileContainer";


type PropsType = {
    state: AppRootType
}

const App = (props: PropsType) => {
// const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Route path={"/Profile/:userId?"}
                       render={() => <ProfileContainer/>}/>
                <Route path={"/Dialogs"}
                       // render={() => <Dialogs dialogsPageState={props.state.dialogsPage}/>}/>
                       render={() => <DialogsContainer />}/>
                <Route path={"/Training"}
                       render={() => <TrainingContainer />}/>
                <Route path={"/Users"}
                       render={() => <UsersContainer/>}/>
                {/*<Route path={"/Messages"} render = {() => <News/>  } />*/}
                {/*<Route path={"/Messages"} render = {() => <Settings/>  } />*/}
                <Redirect from='/' to='/Profile'/>
                <Sidebar/>
            </div>
        </BrowserRouter>
    )
        ;
}

export default App;
