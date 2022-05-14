import React from 'react';
import styles from './CategoryCard.module.css'


export default function CategoryCard(props) {

    function updateFilters() {
        props.fxFilters((pre) => ({ ...pre, category: (props.obj.id) }));
    }

    return <div className={styles.outer} onClick={updateFilters} id={props.filters.category === props.obj.id && styles.selected}>
        <img src={props.obj.icon} />
        <div id={styles.title}>{props.obj.title}</div>
    </div>
}