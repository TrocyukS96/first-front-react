import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {StateType, store, StoreType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

reportWebVitals();
export const rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    )
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)


