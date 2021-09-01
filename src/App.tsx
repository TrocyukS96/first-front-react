import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Sidebar from './components/sidebar/Sidebar';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {Dialogs} from './components/dialogs/Dialogs';
import {ActionTypes, StateType, StoreType} from "./redux/state";
import {Training} from "./components/training/Training";

type PropsType = {
    state: StateType
    dispatch:(action:ActionTypes)=>void

}

const App = (props: PropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Route path={"/Profile"}
                           render={() => <Profile
                               dispatch ={props.dispatch}
                               profilePage={props.state.profilePage}
                           />}/>
                <Route path={"/Dialogs"}
                       render={() => <Dialogs
                           dispatch ={props.dispatch}
                           dialogsPageState={props.state.dialogsPage}
                       />}/>
                <Route path={"/Training"}
                       render={() => <Training
                           dispatch ={props.dispatch}
                           trainingPageState = {props.state.trainingPage}
                       />}/>


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
