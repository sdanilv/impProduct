import React from 'react';
import classes from "./BuyButton.module.css";


const BuyButton = (props) => (
    <button
        className={classes.buyButton}
        type="primary"
        {...props}
    >
        Купить
    </button>
);

export default BuyButton;