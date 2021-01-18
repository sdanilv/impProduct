import React, { useState, useEffect } from "react";
import Spoiler from "./Tools/Spoiler";
import classes from "./Profile.module.css";

const Profile = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  useEffect(() => {
    const isDarkTheme = localStorage.getItem("darkTheme");
    if (isDarkTheme === null) {
      const color = document.documentElement.style.getPropertyValue(
        "--background-color"
      );
      if (color === "#262626") setDarkTheme(true);
      return;
    }
    setDarkTheme(JSON.parse(isDarkTheme));
  }, []);
  const themeToggleHandler = () => {
    setDarkTheme(!darkTheme);
  };
  useEffect(() => {
    if (darkTheme) {
      document.documentElement.style.setProperty("--text-color", "white");
      document.documentElement.style.setProperty(
        "--background-color",
        "#262626"
      );
      document.documentElement.style.setProperty("--input-color", "#262626");
    } else {
      document.documentElement.style.setProperty("--text-color", "#262626");
      document.documentElement.style.setProperty("--background-color", "white");
      document.documentElement.style.setProperty("--input-color", "white");
    }
    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
    console.log(darkTheme)
  }, [darkTheme]);
  return (
    <div className={classes.profile}>
      <div className={classes.container}>
        <div className={classes.header}>
          <img
            className={classes.ava}
            alt="shop"
            src={
              "https://mcusercontent.com/ece05dfe187189e74ea128620/images/bcdc32ce-5eae-4db9-9d40-ce08395bb0c4.jpg"
            }
          />
          <div className={classes.title}>
            <div className={classes.titleName}>EasyShop</div>
            <div className={classes.titleDescription}>
              EasyShop - это платформа, позволяющая реализовывать товары и
              услуги онлайн.
            </div>
          </div>
        </div>
        <Spoiler
          name="О нас"
          value={`EasyShop - это многофункциональная платформа, позволяющая реализовывать товары и услуги онлайн.
        Мы работаем как с юридическими так и физическими лицами. Выплата средств осуществляется на следующий рабочий день. 
        После заказа товара или услуги у Вас сайте, Вы получите уведомление в удобный для Вас мессенджер.`}
        />
        <Spoiler
          name="Оплата и возврат"
          value={`Вы можете сделать оплату с помощью банковских карт Visa или MasterCard.
        Возвраты осуществляются согласно Закона «О защите прав потребителей»
        `}
        />
        <Spoiler
          name="Условия доставки"
          value={`Доставка осуществляется по тарифам Новой Почты. 
        Сроки доставки в ваш город зависят от маршрута машин Новой Почты (посмотреть сроки можно на сайте перевозчика).
        Мы не несем ответственность за изменения сроков доставки со стороны перевозчика.`}
        />
        <Spoiler
          name="Связаться с продавцом"
          value={`Для максимально быстрого старта продаж свяжитесь с нами по телефону 
        +38 093 706 9897 (Telegram/Viber).`}
        />
        <button className={classes.themeToggle} onClick={themeToggleHandler}>
          {darkTheme ? "Светлая тема" : "Темная тема"}
        </button>
      </div>
      <div className={classes.copyright}>
        Правила. Условия. Конфиденциальность.
        <br /> © 2021 EasyShop v.1.0.8
      </div>
    </div>
  );
};

export default Profile;
