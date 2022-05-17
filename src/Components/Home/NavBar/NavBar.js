import React, { useState } from "react";
import Logo from "../Logo";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import OrganizationHeader from "../OrganizationHeader/OrganizationHeader";
import { useNavigate } from "react-router-dom";
import Profile from "../../Profile/Profile";

export default function NavBar(props) {

    const navigate = useNavigate();

    const apiFetchedData = {};



    return (
        <div id={styles.NavBar}>
            <Logo />

            <SearchBar place="Search..." filters={props.filters} fxFilters={props.fxFilters} />

            <OrganizationHeader orgInfo={props.orgInfo} />

            <SearchBar place="Location" filters={props.filters} fxFilters={props.fxFilters} />

            <Profile userInfo={props.userInfo} />

        </div >
    );
}
