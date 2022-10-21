import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img src='https://play-images-prod-ctf.tech.tvnz.co.nz/api/v1/web/image/3CLEzO37tocxCoSmzzcxwx/2733ae58689b3e59e477a86d2da48a36/friends-showtile.png.2733ae58689b3e59e477a86d2da48a36.jpg?width=1200&height=630' />
            </div>
            <div className={s.DiscriptionBlock}>
                ava + discription
            </div>

        </div>
    )
}
export default ProfileInfo;
