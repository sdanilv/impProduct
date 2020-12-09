import React, { Fragment } from "react";
import classes from "./Cards.module.css";
import Card from "./Card";
import Empty from "antd/es/empty";

const Cards = ({
  setProduct,
  addLike,
  removeLike,
  likedProducts,
  products,
  isSearch,
  returnToHomeTab,
}) => {
  const productsMap = products.map((product) => (
    <Fragment key={product.id}>
      <Card
        returnToHomeTab={returnToHomeTab}
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

  return (
    <div className={classes.cardsContainer}>
      {productRows.length ? (
        productRows
      ) : (
        <Empty
          description={
            isSearch ? (
              <div>
                По Вашему запросу ничего не найдено, попробуйте изменить запрос.
              </div>
            ) : (
              <div>
                Ваш список желаний пуст!
                <br /> Наполните его товарами нажав на сердечко.
              </div>
            )
          }
        />
      )}
    </div>
  );
};

export default Cards;
