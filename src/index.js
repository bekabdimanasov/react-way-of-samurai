import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id:1, message:'Hi, how are you?', likesCount:11},
    {id:2, message:'It\'s my first post', likesCount:12},
    {id:2, message:'Blala', likesCount:13},
    {id:2, message:'Yes blalablala', likesCount:14}
]

let dialogs = [
    {id:1, name:'Bek'},
    {id:2, name:'Saamai'},
    {id:3, name:'Bekjan'},
    {id:4, name:'Mama'},
    {id:5, name:'Galmurza'},
    {id:6, name:'Kylych'}
];

let messages = [
    {id:1, message:'Hello'},
    {id:2, message:'How are you, Bek?'},
    {id:3, message:'Fine'}
]
ReactDOM.render(<App messages={messages} dialogs={dialogs} posts={posts}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
