import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {StateType, store, StoreType} from "./redux/state";


//
reportWebVitals();
 export const rerenderEntireTree=(store:StoreType)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App store ={store}   />
        </React.StrictMode>,
        document.getElementById('root')
    )
}
rerenderEntireTree(store)
store.subscribe(rerenderEntireTree)
// subscribe(rerenderEntireTree)