import React from 'react';
import Avatar from '../Avatar/Avatar';
import styles from './OrganizationHeader.module.css'

export default function OrganizationHeader(props) {
    return <div id={styles.OuterDiv}>
        <Avatar
            size="35px"
            source={props.orgInfo.orgIcon}
        />
        <div id={styles.name} >{props.orgInfo.orgTitle}</div>
    </div >
}