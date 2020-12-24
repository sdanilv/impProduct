import React from "react";
import classes from "./Cards.module.css";
import Card from "./Card";
import Empty from "./Empty";
import { useLocation } from "react-router-dom";

const Cards = ({ cards, ...props }) => {
  const { pathname } = useLocation();

  if (pathname === "/profile" || pathname === "/cart") return <></>;
  const productsMap = cards.map((product) => (
    <Card key={product.id} {...props} product={product} />
  ));
  let productRows = [];
  for (let i = 0; i < productsMap.length; i += 2) {
    const row = (
      <div className={classes.cardsRow} key={i}>
        {productsMap[i]}
        {productsMap[i + 1]}
      </div>
    );
    productRows.push(row);
  }

  return (
    <div className={classes.cardsContainer}>
      {productRows.length ? productRows : <Empty />}
    </div>
  );
};

export default Cards;
