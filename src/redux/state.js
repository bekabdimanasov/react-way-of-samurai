import {rerenderEntireTree} from "../render";


let state = {
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
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

// I am add, at
export let addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessage
    };
    state.dialogsPage.messages.push(newMessage);
    rerenderEntireTree(state);
    state.dialogsPage.newMessage = '';
}

export let updateNewMessage = (newText) => {
    state.dialogsPage.newMessage = newText;
    rerenderEntireTree(state);
}
// here

export default state;