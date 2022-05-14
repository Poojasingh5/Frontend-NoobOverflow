import React, { useState } from 'react';
import demoOrgList from './demoAllOrgList';
import styles from './AddOrgForm.module.css'

export default function AddOrgForm() {

    function populateOrgList() {
        return (demoOrgList.map((org) => <option value={org.orgDomain}>{org.orgTitle}</option>));
    }

    const [selectDomain, setSelectDomain] = useState("");
    function updateDomain(event) {
        setSelectDomain(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.userEmail.value);

        if (selectDomain === "")
            alert("Select your Domain");
        else
            console.log(selectDomain);
    }

    return <div id={styles.outer}>
        <form onSubmit={handleSubmit}>
            <select id='orgTitle' form='orgSelectForm' onChange={updateDomain} value={selectDomain} required>
                <option value="" disabled selected>Select Organization</option>
                {populateOrgList()}
            </select>
            <br />
            <fieldset>
                <legend>Domain Email</legend>
                <input type="email" placeholder='xyz@domain.example' id='userEmail' required />
            </fieldset>
            <input type='submit' value='Add' />
        </form>
    </div>
}