import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessage} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {updateNewPostText} from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} updateNewPostText={updateNewPostText} addPost={addPost}
                    updateNewMessage={updateNewMessage} addMessage={addMessage}/>
        </BrowserRouter>, document.getElementById('root'));
}