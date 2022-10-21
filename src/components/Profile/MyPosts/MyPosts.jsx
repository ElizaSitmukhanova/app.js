import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3> 
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button> add post </button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="Hello, my name is Eliza.And you?" likesCount="0" />
                <Post message="Hi, i am Pen.Nice to meet you! Where are you from?" likesCount="25" />
            </div>
        </div>
    )
}
export default MyPosts;
