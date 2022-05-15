import React from 'react';
import Avatar from '../../Home/Avatar/Avatar';
import styles from './OrganizationsCard.module.css'

export default function OrganizationsCard(props) {


    return <div id={styles.outer}>
        <Avatar source={props.org.orgIcon} size="100px" />
        <div id={styles.title}>{props.org.orgTitle}</div>
    </div>
}