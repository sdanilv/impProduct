import React, { Fragment } from "react";
import classes from "./Cards.module.css";
import Card from "./Card";

const Cards = ({
  setProduct,
  addLike,
  removeLike,
  likedProducts,
  products,
}) => {
  const productsMap = products.map((product) => (
    <Fragment key={product.id}>
      <Card
        setProduct={setProduct}
        likedProducts={likedProducts}
        addLike={addLike}
        removeLike={removeLike}
        product={product}
      />
    </Fragment>
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

  return <div className={classes.cardsContainer}>{productRows}</div>;
};

export default Cards;
