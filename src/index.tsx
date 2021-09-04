import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from './redux/redux-store';
// import {store} from "./redux/state";

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


