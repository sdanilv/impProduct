import React, {useState} from "react";
import {Button, Carousel, Image,} from "antd";
import classes from "./Product.module.css";
import TopMenu from "./components/TopMenu";
import Content from "./components/Content";
import LinkToShop from "./components/LinkToShop";
import Description from "./components/Description";
import BottomMenu from "./components/BottomMenu";

const FixedImage = ({src}) => (
    <div>
        <Image width="100%" height="100%" src={src}/>
    </div>
);

const Product = () => {
    const [countLike, setCountLike] = useState(0);
    const [countCart, setCountCart] = useState(0);
    const addLike = () => setCountLike(countLike + 1);
    const removeLike = () => setCountLike(countLike - 1);
    const addCart = () => setCountCart(countCart + 1);

    return (
        <>
            <TopMenu/>
            <div className={classes.container}>
                <Carousel>
                    <FixedImage src="https://i2.rozetka.ua/goods/19660712/mango_8445156388619_images_19660712161.jpg"/>
                    <FixedImage src="https://i2.rozetka.ua/goods/19660712/mango_8445156388619_images_19660712959.jpg"/>
                    <FixedImage src="https://i2.rozetka.ua/goods/19660713/mango_8445156388619_images_19660713685.jpg"/>
                    <FixedImage src="https://i8.rozetka.ua/goods/19660714/mango_8445156388619_images_19660714495.jpg"/>
                </Carousel>
                <Content
                    addLike={addLike}
                    addCart={addCart}
                    removeLike={removeLike}
                    name="Куртка Mango 77005515-17"
                    price={1999}
                    oldPrice={3050.0}
                />
                <Button className={classes.buyButton} block type="primary">
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
                Еще из данного магазина
                <div className={classes.cardsContainer}>
                    <div className={classes.card}>
                        <img
                            alt="card1"
                            className={classes.cardImage}
                            src="https://i8.rozetka.ua/goods/20150833/nike_193659985382_images_20150833311.jpg"
                        />
                        <Content
                            addLike={addLike}
                            addCart={addCart}
                            removeLike={removeLike}
                            name="Футболка Nike M Nsw Camo"
                            price={1499.0}
                            oldPrice={1800.0}
                        />
                    </div>

                    <div className={classes.card}>
                        <img
                            alt="card2"
                            className={classes.cardImage}
                            src="https://i2.rozetka.ua/goods/20150835/nike_194272444577_images_20150835816.jpg"
                        />
                        <Content
                            addLike={addLike}
                            addCart={addCart}
                            removeLike={removeLike}
                            name="Футболка Nike M Nsw Core "
                            price={499.0}
                            oldPrice={750.0}
                        />
                    </div>
                </div>
            </div>
            <BottomMenu countLike={countLike} countCart={countCart}/>
        </>
    );
};

export default Product;
