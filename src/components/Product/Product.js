import React from "react";
import classes from "./Product.module.css";
import Panel from "./Panel";
import { pay } from "../../Utilits/WayForPay";
import Spoiler from "../Tools/Spoiler";
import LinkToShop from "./LinkToShop";
import Carousel from "../Tools/Carousel";
import AnotherText from "./AnotherText";
import { useParams } from "react-router-dom";
import { productsList } from "../../Utilits/productsList";

const Product = ({ addLike, removeLike,  isLiked }) => {
  const params = useParams();
  const product = productsList.find(({ id }) => +params.id === id);
  if (!product) return <></>;

  const { id, name, price, description, img } = product;
  const liked = isLiked(id);
  return (
    <>
      <div className={classes.panel}>
        <Carousel className={classes.carousel} imgs={img} />
        <div className={classes.container}>
          <Panel
            addLike={() => addLike(id)}
            removeLike={() => removeLike(id)}
            oldPrice={500.0}
            {...{ liked, name, price }}
          />
          <button
            className={classes.buyButton}
            type="primary"
            onClick={() => pay(name, price)}
          >
            Купить
          </button>
          <Spoiler name="Описание" value={description} />
          <LinkToShop
            href="/home"
            avaSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            shopName="EasyShop"
          />
        </div>
      </div>
      <AnotherText />
    </>
  );
};

export default Product;
