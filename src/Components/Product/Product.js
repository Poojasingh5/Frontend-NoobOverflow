import React from 'react';
import ProductDisplay from '../Home/ProductDisplay/ProductDisplay';
import styles from './Product.module.css'

export default function Product(props) {

    const { prodTitle, prodImg, prodDesc, rentPrice, sellPrice, sellerName } = props.prodInfo;

    return <div id={styles.outest}>
        <div id={styles.outer}>
            <div id={styles.cross} onClick={props.fxClicked}>
                X
            </div>

            <div id={styles.upper}>
                <div id={styles.img}>
                    <img src={prodImg} />
                </div>

                <div id={styles.rightCol}>

                    <div id={styles.prices}>
                        {rentPrice !== "" && <b>RENT</b>}  {rentPrice !== "" && <>₹{rentPrice}</>}
                        {sellPrice !== "" && <b>SELL</b>}  {sellPrice !== "" && <>₹{sellPrice}</>}

                    </div>

                    <br />
                    <hr/>

                    <div id={styles.seller}>
                        <b>SELLER NAME</b> <b>{sellerName}</b>

                        <div id={styles.chat}>
                            CHAT WITH SELLER
                        </div>
                    </div>

                </div>

            </div>

            <div id={styles.text}>
                <b>TITLE :</b> <br /> {prodTitle}
            </div>

            <div id={styles.text}>
                <b>DESCRIPTION :</b> <br />{prodDesc}
            </div>
        </div>
    </div>
}