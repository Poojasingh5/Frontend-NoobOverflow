import React from 'react';
import styles from './ProductCard.module.css';

export default function ProductCard(props) {

    let rentPrice = props.info.rentPrice;
    let sellPrice = props.info.sellPrice;
    let imgUrl = props.info.imgUrl;
    let title = props.info.title;

    return <div id={styles.outer}>
        <div id={styles.image}>
            <img src={imgUrl} />
        </div>

        <div id={styles.content}>
            {rentPrice != "" && <div id={styles.price}>&#x20B9; {rentPrice}<span >/day</span></div>}
            {sellPrice != "" && <div id={styles.price}>&#8377; {sellPrice}</div>}
            <div id={styles.title}>{title}</div>
        </div>
    </div >
}