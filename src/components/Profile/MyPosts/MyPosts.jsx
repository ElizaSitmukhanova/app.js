import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
        props.updateNewPostText('');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    let postElements =
        props.postData.map(p => <Post message={p.message} likesCount={p.likesCount} image={p.image} />)
    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} 
                    value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}> add post </button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts;
