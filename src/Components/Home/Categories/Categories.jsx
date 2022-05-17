import React, { useState } from "react";
import styles from "./Categories.module.css";
import CategoryCard from "./CategoriesCard/CategoryCard";
import categoriesList from "./categoriesList";
import Mode from "./Mode/Mode";

export default function Categories(props) {
    
    const [isOpened, setIsOpened] = useState(false);

    function updateIsOpened() {
        setIsOpened((x) => !x);
    }

    function populateCategories() {
        return categoriesList.map((Category) => <CategoryCard obj={Category} filters={props.filters} fxFilters={props.fxFilters} />);
    }



    return (
        <div id={styles.outer}>
            <div
                id={styles.front}
                onMouseLeave={() => setIsOpened(false)}
            >
                <b onClick={updateIsOpened} >CATEGORIES</b>
                <div id={styles.content} >
                    {isOpened && populateCategories()}
                </div>
                {isOpened && <Mode filters={props.filters} fxFilters={props.fxFilters} />}
            </div>
        </div>
    );
}
