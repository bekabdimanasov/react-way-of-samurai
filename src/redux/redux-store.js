import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import profilePageReducer from "./profile-reducer";
import dialogsPageReducer from "./dialogs-reducer";

let reducers = combineReducers({
    /*state :    reducer*/
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers);

console.log(store);

export default store;