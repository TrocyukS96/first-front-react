import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {TrainingContainer} from "./components/training/Training";
import ProfileContainer from "./components/profile/ProfileContainer";
import {HeaderContainer} from './components/header/HeaderContainer';
import UsersContainer from "./components/users/UsersContainer";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import Login from "./components/login/LoginForm";

const App = () => {
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
        ;
}

export default App;
