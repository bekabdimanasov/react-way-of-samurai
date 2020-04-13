let state = {
    profilePage: {
        posts: [
            {id:1, message:'Hi, how are you?', likesCount:11},
            {id:2, message:'It\'s my first post', likesCount:12},
            {id:2, message:'Blala', likesCount:13},
            {id:2, message:'Yes blalablala', likesCount:14}
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

export let addPost = (newDialog) => {
    let newPost = {
        id: 3,
        message: newDialog,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
}

export default state;