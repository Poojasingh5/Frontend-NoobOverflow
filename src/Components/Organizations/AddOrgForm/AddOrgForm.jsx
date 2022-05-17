import React, { useState } from 'react';
import demoOrgList from './demoAllOrgList';
import styles from './AddOrgForm.module.css'

export default function AddOrgForm() {

    function handleSubmit(event) {
        event.preventDefault();
        alert('Feature under Process!');
    }

    return <div id={styles.outer}>
        <form onSubmit={handleSubmit}>

            <fieldset>
                <legend>Domain Email</legend>
                <input type="email" placeholder='xyz@domain.example' id='userEmail' required />
            </fieldset>
            <input type='submit' value='Add' />
        </form>
    </div>
}