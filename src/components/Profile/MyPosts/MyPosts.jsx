import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
     

    let postElements =
        props.postData.map(p => <Post message={p.message} likesCount={p.likesCount} image={p.image} />)
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
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts;
