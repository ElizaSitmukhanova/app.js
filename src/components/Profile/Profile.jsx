import React from 'react';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://play-images-prod-ctf.tech.tvnz.co.nz/api/v1/web/image/3CLEzO37tocxCoSmzzcxwx/2733ae58689b3e59e477a86d2da48a36/friends-showtile.png.2733ae58689b3e59e477a86d2da48a36.jpg?width=1200&height=630' />
            </div>
            <div>
                ava + discription
            </div>
            <MyPosts/>
        </div>
    )
}
export default Profile;
