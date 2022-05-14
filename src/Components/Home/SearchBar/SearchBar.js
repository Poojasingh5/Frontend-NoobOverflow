import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import searchIcon from "../media/searchIcon.png";
import locationIcon from "../media/locationIcon.png"

export default function SearchBar(props) {

    const [text, setText] = useState("all");

    function updateInp(event) {
        setText(event.target.value);
    }

    function updateLocation() {
        if (text === "")
            setText("all");

        props.fxFilters({ ...props.filters, location: text });

    }
    function updateSearch() {
        if (text === "")
            setText("all");

        props.fxFilters({ ...props.filters, search: text });

    }

    return (
        <div id={styles.outerDiv}>
            <input onInput={updateInp} type="text" className={styles.inp} placeholder={props.place} />
            {props.place === "Location" ? <img onClick={updateLocation} src={locationIcon} /> : <img onClick={updateSearch} src={searchIcon} />}
        </div>
    );
}
