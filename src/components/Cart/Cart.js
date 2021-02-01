import React from "react";
import classes from "./Cart.module.css";
import CartProduct from "./CartProduct";
import LinkToShop from "../Product/LinkToShop";
import {pay} from "../../Utilits/WayForPay";
import BuyButton from "../Tools/BuyButton";
import Empty from "../Tools/Empty";
import {useRecoilValue} from "recoil";
import {cartAtoms} from "../../atoms/CartAtoms";

const Cart = () => {
    const {sum, products} = useRecoilValue(cartAtoms)

    if (!products) return <></>;

    let productsId = [];
    const productName = [];
    const productPrice = [];
    const productCount = [];
    const productsMap = products.map((product) => {
        productName.push(product.name);
        productPrice.push(product.price);
        productCount.push(product.count);
        productsId.push(product.id);
        return <CartProduct key={product.id} {...product}  />;
    });
    const buyButtonHandler = () => {
        pay(productName, productPrice, productCount, productsId, sum);
    };

    return (
        <div className={classes.cart}>
            <div className={classes.cartLink}>
                <LinkToShop/>
            </div>
            <div className={classes.productsTable}>
                {productsMap.length ? productsMap : <Empty text="Ваша корзина пуста"/>}
            </div>
            <div className={classes.totalCount}>
                <div>Всего:</div>
                <div>{sum}грн</div>
            </div>
            <div className={classes.buyButton}>
                <BuyButton onClick={buyButtonHandler} disabled={!sum}/>
            </div>
        </div>
    );
};

export default Cart;
