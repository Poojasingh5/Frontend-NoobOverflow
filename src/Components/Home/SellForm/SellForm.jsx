import React from 'react';
import styles from './SellForm.module.css'
import categories from './categoriesSelect'

export default function SellForm() {

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.rentPrice.value);


        if (event.target.rentPrice.value === '' && event.target.sellPrice.value === '')
            alert('Please enter the price of your product!');
        else
            alert('Ad posted successfully!');
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

                <div id={styles.prices}>
                    <fieldset id={styles.priceDiv}>
                        <legend>Rent Price</legend>
                        ₹<input type="number" id='rentPrice' />/day
                    </fieldset>

                    <fieldset id={styles.priceDiv}>
                        <legend>Sell Price</legend>
                        ₹  <input type="number" id='sellPrice' />
                    </fieldset>
                </div>

                <fieldset>
                    <legend>Category</legend>
                    <select>
                        <option disabled selected>Select one</option>
                        {categories.map(cat => <option id={cat.id} key={cat.key}>{cat.title}</option>)}
                    </select>
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