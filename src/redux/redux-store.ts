import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import trainingReducer from "./TrainingReducer";

let reducers = combineReducers({    //special function to combine reducers
    profilePage:profileReducer,          // create an obj, with property profileReducer and value profileReducer
    dialogsPage:dialogsReducer,
    trainingPage:trainingReducer
    ///воспринимать данный обьект больше как state c ветками, profile, dialogs, training
});

export type AppRootType = ReturnType<typeof reducers>
let store: Store = createStore(reducers);

export default store;