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

const Product = ({ productsList, ...props }) => {
  const params = useParams();
  const paramsId = useRef("");
  useEffect(() => {
    if (params.id === paramsId) {
      return;
    }
    paramsId.current = params.id;
    window.scrollTo(0, 0);
  }, [params]);
  const product = productsList.find(({ id }) => params.id === id);
  if (!product) return <></>;

  const { name, price, description, img, id } = product;

  return (
    <>
      <div className={classes.panel}>
        <Carousel className={classes.carousel} imgs={img} />
        <div className={classes.container}>
          <Panel oldPrice={500.0} {...{ ...props, name, price, product }} />
          <BuyButton onClick={() => pay(name, price, [1], [id])} />
          <Spoiler name="Описание" value={description} />
          <LinkToShop />
        </div>
      </div>
      <AnotherText />
    </>
  );
};

export default Product;
