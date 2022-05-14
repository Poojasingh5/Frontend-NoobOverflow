import React from 'react';
import ProductCard from '../ProductCard/ProductCard.jsx';
import styles from './ProductDisplay.module.css'

export default function ProductDisplay(props) {

    function populateProducts() {
        return ((props.list).map((product) => <ProductCard info={product} />));
    }

    return <div id={styles.outer}>
        {(props.list).length > 0 ? populateProducts() : <h2>Nothing to Show here...</h2>}
    </div>
}