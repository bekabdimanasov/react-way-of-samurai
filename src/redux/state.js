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
            newMessage: 'where' //I am add
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("State change")
    },

    addPost() {
        let newPost = {
            id: 6,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
// I am add, at
    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessage
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._callSubscriber(this._state);
        this._state.dialogsPage.newMessage = '';
    },
    updateNewMessage(newText) {
        this._state.dialogsPage.newMessage = newText;
        this._callSubscriber(this._state);
    },
// here
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;

window.store = store;