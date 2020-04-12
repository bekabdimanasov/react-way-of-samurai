import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements = [
        {id:1, message:'Hi, how are you?', likesCount:11},
        {id:2, message:'It\'s my first post', likesCount:12},
        {id:2, message:'Blala', likesCount:13},
        {id:2, message:'Yes blalablala', likesCount:14}
    ]

    let post = postElements.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}

export default MyPosts;