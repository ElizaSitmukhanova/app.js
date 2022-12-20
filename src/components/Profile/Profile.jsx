import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
   
    return (
        <div>
            <ProfileInfo/> 
            <MyPosts postData={props.localstate.postData}
                     newPostText={props.localstate.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost} />
        </div>
    )
}
export default Profile;
