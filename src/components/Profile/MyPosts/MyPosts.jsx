import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea> </textarea>
                <button> add post </button>
                <button> remove </button>
            </div>
            <div className={s.posts}>
              <Post message = "Hello, my name is Eliza.And you?"/>
              <Post message = "Hi, i am Pen.Nice to meet you! Where are you from?"/>
            </div>
        </div>
        )
}
export default MyPosts;
