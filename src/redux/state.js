const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

export let store = {
    _state:{
        profilePage: {
            posts: [
                {id:1, message:'Hi, how are you?', likesCount:11},
                {id:3, message:'It\'s my first post', likesCount:12},
                {id:4, message:'Blala', likesCount:13},
                {id:5, message:'Yes blalablala', likesCount:14}
            ],
            newPostText: 'it-kamasutra.com'
        },

        dialogsPage: {
            dialogs: [
                {id:1, name:'Bek'},
                {id:2, name:'Saamai'},
                {id:3, name:'Bekjan'},
                {id:4, name:'Mama'},
                {id:5, name:'Galmurza'},
                {id:6, name:'Kylych'}
            ],
            messages: [
                {id:1, message:'Hello'},
                {id:2, message:'How are you, Bek?'},
                {id:3, message:'Fine'}
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        // I am add, at
        if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessage
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._callSubscriber(this._state);
            this._state.dialogsPage.newMessage = '';
        } else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.dialogsPage.newMessage = action.body;
            this._callSubscriber(this._state);
        }
        // here
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE, body: body});

export default store;

window.store = store;