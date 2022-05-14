import React from 'react';
import Avatar from '../Avatar/Avatar';
import styles from './ProfileDrop.module.css'

export default function ProfileDrop(props) {

    return <div id={styles.outerDiv}>
        <div>
            Hello,<br /><i><b>{props.name}</b></i>
            <hr />
        </div>
        <div>
            <a href='google.com'>My Ads</a><br />
            <a href='google.com'>Favourites</a><br />
            <a href='google.com'>Chats</a>
            <hr />
            <a href='google.com'>LogOut</a>
        </div>
    </div>
}