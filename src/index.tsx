import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from './redux/redux-store';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

reportWebVitals();


ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
        <App />
        {/*<App />*/}
    </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)





