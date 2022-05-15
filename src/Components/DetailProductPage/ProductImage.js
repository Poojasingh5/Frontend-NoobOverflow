import React from 'react';
import { style } from './style.css';
import "antd/dist/antd.css";

function ProductImage({ flags }) {

    return (
        <div class="prod-img" >
            <img class="prod-img" key={flags[0].id} src={flags[0].image} alt='o'></img>
        </div>
    )
}

export default ProductImage
