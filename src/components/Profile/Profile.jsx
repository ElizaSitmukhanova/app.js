import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
   
    return (
        <div>
            <ProfileInfo /> 
            <MyPosts postData={props.localstate.postData}
                     newPostText={props.localstate.newPostText}
                     dispatch={props.dispatch} />
        </div>
    )
}
export default Profile;
