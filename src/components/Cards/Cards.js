import React from "react";
import classes from "./Cards.module.css";
import Card from "./Card";
import Empty from "../Tools/Empty";
import { useLocation } from "react-router-dom";

const Cards = ({ cards, ...props }) => {
  const { pathname } = useLocation();
  const textIfEmpty =
    pathname === "/like"
      ? `Ваш список желаний пуст! Наполните его товарами нажав на сердечко.`
      : `По Вашему запросу ничего не найдено. Попробуйте изменить запрос.`;

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
    <div id="start-of-content" className={classes.cardsContainer}>
      {productRows.length ? productRows : <Empty text={textIfEmpty} />}
    </div>
  );
};

export default Cards;
