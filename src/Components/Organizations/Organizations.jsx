import React, { useState } from 'react';
import styles from './Organizations.module.css'
import OrganizationsCard from './OrganizationsCard/OrganizationsCard';
import { addCard } from '../Home/demoOrgList';
import AddOrgForm from './AddOrgForm/AddOrgForm';
import { useLocation } from 'react-router-dom';

export default function Organizations() {

    const location = useLocation();
    const list = location.state.list;
    console.log(list);
    // const list = [];

    function populateOrganizations() {
        return (list.map((x) => <OrganizationsCard org={x} />));
    }

    const [addClicked, setAddClicked] = useState(false);

    function updateAddClicked() {
        setAddClicked(e => !e);
    }

    return <div id={styles.outer}>
        <span>{list.length > 1 && "Select or "} Add an Organization</span>

        <div id={styles.orgList}>{populateOrganizations()}</div>

        <div id={styles.addOrg} onClick={updateAddClicked}><OrganizationsCard org={addCard} /></div>

        {addClicked && <AddOrgForm />}
    </div>
}