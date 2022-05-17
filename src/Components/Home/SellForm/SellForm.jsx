import React from 'react';
import styles from './SellForm.module.css'
import categories from './categoriesSelect'

export default function SellForm(props) {

    let obj = {};

    function handleSubmit(event) {
        event.preventDefault();

        obj = {
            prodImg: event.target.prodImg.value,
            prodTitle: event.target.prodTitle.value,
            prodDesc: event.target.prodDesc.value,
            category: event.target.category.value,
            rentPrice: event.target.rentPrice.value,
            sellPrice: event.target.sellPrice.value,
            sellerId: props.sellerId,
            orgId: props.orgId
        };

        if (event.target.rentPrice.value === '' && event.target.sellPrice.value === '')
            alert('Please enter price for your product!');
        else
            alert('Ad posted successfully!');
    }

    return <div id={styles.outest}>
        <div id={styles.outer}>
            <form onSubmit={handleSubmit}>

                <fieldset>
                    <legend>Title</legend>
                    <input type="text" id='prodTitle' required />
                </fieldset>

                <fieldset>
                    <legend>Description</legend>
                    <input type="text" id='prodDesc' required />
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
                    <select id='category'>
                        <option disabled selected>Select one</option>
                        {categories.map(cat => <option id={cat.id} key={cat.key} value={cat.id}>{cat.title}</option>)}
                    </select>
                </fieldset>

                <fieldset>
                    <legend>Image</legend>
                    <input type='file' id='prodImg' required />
                </fieldset>

                <input type='submit' value='Post Ad!' />
            </form>
        </div>
    </div>
}