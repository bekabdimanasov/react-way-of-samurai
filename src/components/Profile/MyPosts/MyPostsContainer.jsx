import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;