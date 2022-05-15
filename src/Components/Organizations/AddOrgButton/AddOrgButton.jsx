import React from 'react';
import Avatar from '../../Home/Avatar/Avatar';
import styles from './AddOrgButton.module.css';

export default function () {
    return <div id={styles.outer}>
        <Avatar size="100px" source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsH-kmHwy1iJgBeyrDPIRgPvkvh5MH1UMGg&usqp=CAU' />
        <div id={styles.title}>ADD</div>
    </div>
}