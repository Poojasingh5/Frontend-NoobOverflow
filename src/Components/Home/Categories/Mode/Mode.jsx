import React from 'react';
import styles from './Mode.module.css'

export default function Mode(props) {

    function updateFilters(event) {
        props.fxFilters((pre) => ({ ...pre, mode: event.target.title }))
    }

    // className={props.filters.mode === "rent" ? styles.pressed :}

    return <div id={styles.outer}>
        <div onClick={updateFilters} className={props.filters.mode === "buy" ? styles.pressed : styles.base} title="buy" id={styles.buy}>BUY</div>
        <div onClick={updateFilters} className={props.filters.mode === "all" ? styles.pressed : styles.base} title="all" >BUY OR RENT</div>
        <div onClick={updateFilters} className={props.filters.mode === "rent" ? styles.pressed : styles.base} title="rent" id={styles.rent}>RENT</div>
    </div>
}