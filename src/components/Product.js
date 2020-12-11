import React from "react";
import { Carousel, Image } from "antd";
import classes from "../Shop.module.css";
import Panel from "./Panel";
import {  pay } from "./Tools/WayForPay";
import Description from "./Description";
import LinkToShop from "./LinkToShop";

const FixedImage = ({ src }) => (
  <div>
    <Image width="100%" height="100%" src={src} />
  </div>
);

const Product = ({
  product,
  addLike,
  removeLike,
  seeAllCards,
  likedProducts,
}) => {
  const { id, name, price, description } = product;
  const carouselMap = product.img.map((img) => (
    <FixedImage key={img} src={img} />
  ));
  const liked = likedProducts.includes(id);
  return (
    <>
      <div className={classes.panel}>
        <div className={classes.carousel}>
          <Carousel>{carouselMap}</Carousel>
        </div>
        <div className={classes.container}>
          <Panel
            liked={liked}
            addLike={() => addLike(id)}
            removeLike={() => removeLike(id)}
            name={name}
            price={price}
            oldPrice={500.0}
          />
          <button
            className={classes.buyButton}
            type="primary"
            onClick={() =>
              // invoice("https://secure.wayforpay.com/button/bef05b386c02c")
              pay(name, price)
            }
          >
            Купить
          </button>
          <Description value={description} />
          <LinkToShop
            avaSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            seeAllCards={seeAllCards}
            shopName="InstaShop"
          />
        </div>
      </div>
      <div className={classes.anotherTextContainer}>
        <span className={classes.anotherText}> Еще из данного магазина</span>
        <span
          className={classes.anotherTextContainerAll}
          onClick={() => seeAllCards()}
        >
          Все
        </span>
      </div>
    </>
  );
};

export default Product;
