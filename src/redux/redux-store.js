import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import profilePageReducer from "./profile-reducer";
import dialogsPageReducer from "./dialogs-reducer";
import usersPageReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    /*state :    reducer*/
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})

let store = createStore(reducers);

window.store = store;

export default store;