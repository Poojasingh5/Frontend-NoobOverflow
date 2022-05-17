import React from 'react';
import Avatar from '../Avatar/Avatar';
import styles from './OrganizationHeader.module.css'

export default function OrganizationHeader(props) {

    function handleOrgClicked() {
        alert('Feature under Process!');
    }

    return <div id={styles.OuterDiv} onClick={handleOrgClicked}>
        <Avatar
            size="35px"
            source={props.orgInfo.orgIcon}
        />
        <div id={styles.name} >{props.orgInfo.orgTitle}</div>
    </div >
}