import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Sidebar from './components/sidebar/Sidebar';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {Dialogs} from './components/dialogs/Dialogs';
import { StateType, StoreType} from "./redux/state";

type PropsType = {
    store: StoreType

}

const App = (props: PropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Route path={"/Profile"}
                       render={() => <Profile profilePageState={props.store._state.profilePage} addPostTask={props.store.addTask}
                                              changeNewPostText={props.store.changeNewPostText}/>}/>
                <Route path={"/Dialogs"} render={() => <Dialogs dialogsPageState={props.store._state.dialogsPage}/>}/>
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
