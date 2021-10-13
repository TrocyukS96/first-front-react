import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from './redux/redux-store';
import {Provider} from "react-redux";

reportWebVitals();

ReactDOM.render(
    <Provider store={store}>
        <App state={store.getState()} />
        {/*<App />*/}
    </Provider>,
    document.getElementById('root')
)





