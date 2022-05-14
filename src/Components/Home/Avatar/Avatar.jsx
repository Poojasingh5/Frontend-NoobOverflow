import styles from "./Avatar.module.css";
import React, { useState } from "react";


export default function Avatar(props) {

    return (
        <img
            id={styles.Avatar}
            src={props.source}
            height={props.size}
            width={props.size}
            alt="Profile"
        />
    );
}
