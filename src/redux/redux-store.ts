import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import trainingReducer from "./TrainingReducer";
import {usersReducer} from "./UsersReducer";
import {authReducer} from "./AuthReducer";
import thunk from 'redux-thunk'

let reducers = combineReducers({    //special function to combine reducers
    profilePage:profileReducer,          // create an obj, with property profileReducer and value profileReducer
    dialogsPage:dialogsReducer,
    trainingPage:trainingReducer,
    usersPage:usersReducer,
    auth:authReducer
    ///воспринимать данный обьект больше как state c ветками, profile, dialogs, training
});

export type AppRootType = ReturnType<typeof reducers>
let store: Store = createStore(reducers, applyMiddleware(thunk));


export default store;