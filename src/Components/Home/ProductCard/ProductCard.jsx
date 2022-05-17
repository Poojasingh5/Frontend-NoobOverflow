import React, { useState } from 'react';
import Product from '../../Product/Product';
import styles from './ProductCard.module.css';

export default function ProductCard(props) {

    const { prodImg, prodTitle, rentPrice, sellPrice } = props.prodInfo;

    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        setIsClicked(pre => !pre)
    }

    return <div>
        <div id={styles.outer} onClick={handleClick}>
            <div id={styles.image}>
                <img src={prodImg} />
            </div>

            <div id={styles.content}>
                {rentPrice != "" && <div id={styles.price}>&#x20B9; {rentPrice}<span >/day</span></div>}
                {sellPrice != "" && <div id={styles.price}>&#8377; {sellPrice}</div>}
                <div id={styles.title}>{prodTitle}</div>
            </div>
        </div >
        {isClicked && <Product prodInfo={props.prodInfo} fxClicked={handleClick} />}
    </div>
}