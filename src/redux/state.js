import {rerenderEntireTree} from "../render";


let state = {
    profilePage: {
        posts: [
            {id:1, message:'Hi, how are you?', likesCount:11},
            {id:3, message:'It\'s my first post', likesCount:12},
            {id:4, message:'Blala', likesCount:13},
            {id:5, message:'Yes blalablala', likesCount:14}
        ]
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
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 6,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);

    rerenderEntireTree(state);
}

export default state;