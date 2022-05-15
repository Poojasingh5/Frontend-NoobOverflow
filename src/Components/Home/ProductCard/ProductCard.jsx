import React from 'react';
import styles from './ProductCard.module.css';

export default function ProductCard(props) {

    const { prodImg, prodTitle, rentPrice, sellPrice } = props.prodInfo;

    return <div id={styles.outer}>
        <div id={styles.image}>
            <img src={prodImg} />
        </div>

        <div id={styles.content}>
            {rentPrice != "" && <div id={styles.price}>&#x20B9; {rentPrice}<span >/day</span></div>}
            {sellPrice != "" && <div id={styles.price}>&#8377; {sellPrice}</div>}
            <div id={styles.title}>{prodTitle}</div>
        </div>
    </div >
}