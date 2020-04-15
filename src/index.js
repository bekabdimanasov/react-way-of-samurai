import * as serviceWorker from './serviceWorker';
import state from "./redux/state.js";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, subscribe, updateNewMessage} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import {updateNewPostText} from "./redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} updateNewPostText={updateNewPostText} addPost={addPost}
                 updateNewMessage={updateNewMessage} addMessage={addMessage}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
