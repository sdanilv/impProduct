import React, { useEffect, useRef } from "react";
import classes from "./Product.module.css";
import Panel from "./Panel";
import { pay } from "../../Utilits/WayForPay";
import Spoiler from "../Tools/Spoiler";
import LinkToShop from "./LinkToShop";
import Carousel from "../Tools/Carousel";
import AnotherText from "./AnotherText";
import { useParams } from "react-router-dom";
import BuyButton from "../Tools/BuyButton";

const Product = ({ productsList,CardsShell, ...props }) => {
  const {id} = useParams();
  const paramsId = useRef("");
  useEffect(() => {
    if (id === paramsId) {
      return;
    }
    paramsId.current = id;
    window.scrollTo(0, 0);
  }, [id]);
  const product = productsList.find(product=> id === product.id);
  if (!product) return <></>;

  const { name, price, description, img } = product;

  return (
    <>
      <div className={classes.panel}>
        <Carousel className={classes.carousel} imgs={img} />
        <div className={classes.container}>
          <Panel oldPrice={500.0} {...{ ...props, name, price, product }} />
          <BuyButton onClick={() => pay(name, price, [1], [product.id])} />
          <Spoiler name="Описание" value={description} />
          <LinkToShop />
        </div>
      </div>
      <AnotherText />
      <CardsShell cards={productsList} />
    </>
  );
};

export default Product;
