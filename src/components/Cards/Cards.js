import React from "react";
import classes from "./Cards.module.css";
import Card from "./Card";
import { products } from "../Tools/Products";

const Cards = ({ setProduct }) => {
  const productsMap = products.map((product) => (
    <Card
      setProduct={() =>{ setProduct(product); console.log(product)}}
      id={product.id}
      img={product.img}
      name={product.name}
      price={product.price}
    />
  ));
  let productRows = [];
  for (let i = 0; i < productsMap.length; i += 2) {
    const row = (
      <div className={classes.cardsRow}  onClick={()=>console.log("hello")}>
        {productsMap[i]}
        {productsMap[i + 1]}
      </div>
    );

    productRows.push(row);
  }

  return <div className={classes.cardsContainer} >{productRows}</div>;
};

export default Cards;
