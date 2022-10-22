import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hello, my name is Eliza.And you?', image:'https://sun9-34.userapi.com/impf/c854416/v854416044/c61ae/7G4AJo-AM5s.jpg?size=960x1200&quality=96&sign=f7064faaa607729de77ec3aef7383dc5&type=album', likesCount: 0},
        {id: 2, message: 'Hi, i am  Rachel .Nice to meet you! Where are you from?', image:'https://art-assorty.ru/wp-content/uploads/2018/11/23256354753-1.jpg', likesCount: 25},
    ];
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
                <Post message={postData[0].message} likesCount={postData[0].likesCount} image={postData[0].image} />
                <Post message={postData[1].message} likesCount={postData[1].likesCount} image={postData[1].image}/>
            </div>
        </div>
    )
}
export default MyPosts;
