import profilePageReducer from "./profile-reducer";
import dialogsPageReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 11},
                {id: 3, message: 'It\'s my first post', likesCount: 12},
                {id: 4, message: 'Blala', likesCount: 13},
                {id: 5, message: 'Yes blalablala', likesCount: 14}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Bek'},
                {id: 2, name: 'Saamai'},
                {id: 3, name: 'Bekjan'},
                {id: 4, name: 'Mama'},
                {id: 5, name: 'Galmurza'},
                {id: 6, name: 'Kylych'}
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you, Bek?'},
                {id: 3, message: 'Fine'}
            ],
            newMessage: '' //I am add
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State change")
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    // methods change _state
    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;