import React from 'react';
import Avatar from '../../Home/Avatar/Avatar';
import styles from './OrganizationsCard.module.css'
import { useNavigate } from 'react-router-dom';

export default function OrganizationsCard(props) {
    const navigate = useNavigate();

    function handleClick() {
        console.log(props);
        navigate('/organization/home', { state: { userInfo: props.userInfo, orgInfo: props.org } });
    }

    return <div id={styles.outer} onClick={handleClick()}>
        <Avatar source={props.org.orgIcon} size="100px" />
        <div id={styles.title}>{props.org.orgTitle}</div>
    </div>
}