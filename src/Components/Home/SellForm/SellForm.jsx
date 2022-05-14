import React from 'react';
import styles from './SellForm.module.css'

export default function SellForm() {

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.rentPrice.value);
        alert('Ad posted successfully!')
    }

    return <div id={styles.outest}>
        <div id={styles.outer}>
            <form onSubmit={handleSubmit}>

                <fieldset>
                    <legend>Title</legend>
                    <input type="text" id='title' required />
                </fieldset>

                <fieldset>
                    <legend>Description</legend>
                    <input type="text" id='desc' required />
                </fieldset>

                <fieldset>
                    <legend>Rent Price</legend>
                    ₹<input type="number" id='rentPrice' />/day
                </fieldset>

                <fieldset>
                    <legend>Sell Price</legend>
                    ₹<input type="number" id='sellPrice' />
                </fieldset>

                <fieldset>
                    <legend>Image</legend>
                    <input type='file' id='img' required />
                </fieldset>

                <input type='submit' value='Post Ad!' />
            </form>
        </div>
    </div>
}