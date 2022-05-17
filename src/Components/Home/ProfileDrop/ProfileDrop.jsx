import React from 'react';
import styles from './ProfileDrop.module.css'

export default function ProfileDrop(props) {

    return <div id={styles.outerDiv}>
        <div>
            Hello,<br /><i><b>{props.userInfo.userName}</b></i>
            <hr />
        </div>
        <div>
            <a >Your Ads</a><br />
            <a >Favourites</a><br />
            <a >Chats</a>
            <hr />
            <a href='/'>LogOut</a>
        </div>
    </div>
}