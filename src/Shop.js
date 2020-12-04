import React, { useState } from "react";
import { Button, Carousel, Image } from "antd";
import classes from "./Shop.module.css";
import Panel from "./components/Panel";
import LinkToShop from "./components/LinkToShop";
import Description from "./components/Description";
import BottomMenu from "./components/BottomMenu";
import Cards from "./components/Cards/Cards";
import { products } from "./components/Tools/Products";
import { Wayforpay } from "./components/Tools/WayForPay";

const FixedImage = ({ src }) => (
  <div>
    <Image width="100%" height="100%" src={src} />
  </div>
);

const Shop = () => {
  const [countLike, setCountLike] = useState(0);
  const [product, setProduct]= useState(products[0]);
  const addLike = () => setCountLike(countLike + 1);
  const removeLike = () => setCountLike(countLike - 1);
  const carouselMap = product.img.map((img) => <FixedImage src={img} />);
  return (
    <>
      <Carousel>{carouselMap}</Carousel>
      <div className={classes.container}>
        <Panel
          addLike={addLike}
          removeLike={removeLike}
          name={product.name}
          price={product.price}
          oldPrice={500.0}
        />
        <Button
          className={classes.buyButton}
          block
          type="primary"
          onClick={() => {
            var wayforpay = new Wayforpay();
            wayforpay.invoice(
              "https://secure.wayforpay.com/button/bef05b386c02c"
            );
          }}
        >
          Купить
        </Button>
        <Description
          value=" Mango — це найбільша компанія з виробництва модного одягу, взуття,
          сумок і аксесуарів для жінок і чоловіків. Mango є одним із
          найвідоміших брендів жіночої моди в середній ціновій категорії, що
          пропонує всі найактуальніші та найцікавіші тренди сучасного одягу,
          взуття, прикрас і сумочок у своїх достатньо доступних за цінами
          колекціях."
        />
        <LinkToShop
          avaSrc="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          href="https://impulse.ottry.com/"
          shopName="Impulse"
        />
        <div className={classes.anotherTextContainer}>
          <span className={classes.anotherText}> Еще из данного магазина</span>
          <span className={classes.anotherTextContainerAll}>Все</span>
        </div>
        <Cards addLike={addLike} setProduct={setProduct} removeLike={removeLike} count={4} />
      </div>
      <BottomMenu countLike={countLike}  />
    </>
  );
};

export default Shop;
