import React from "react";
import classes from "./Profile.module.css";
import Spoiler from "./Tools/Spoiler";

const Profile = (props) => (
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
            {" "}
            EasyShop - это многофункциональная платформа, позволяющая
            реализовывать товары и услуги онлайн.
          </div>
        </div>
      </div>
      <Spoiler
        name="О нас"
        value="EasyShop - это многофункциональная платформа, позволяющая реализовывать товары и услуги онлайн.
Мы работаем как с юридическими так и физическими лицами.
Выплата средств осуществляется на следующий рабочий день.
После заказа товара или услуги у Вас сайте, Вы получите уведомление в удобный для Вас мессенджер.

"
      />
      <Spoiler
        name="Оплата и возврат"
        value="Вы можете сделать оплату с помощью банковских карт Visa или MasterCard.
        Возвраты осуществляются согласно Закона «О защите прав потребителей»
        "
      />
      <Spoiler
        name="Условия доставки"
        value="Доставка осуществляется по тарифам Новой Почты.
Сроки доставки в ваш город зависят от маршрута машин Новой Почты (посмотреть сроки можно на сайте перевозчика). Мы не несем ответственность за изменения сроков доставки со стороны перевозчика."
      />
      <Spoiler
        name="Связвться с продавцом"
        value="
Для максимально быстрого старта продаж свяжитесь с нами по телефону +38 093 706 9897 (Telegram/Viber)."
      />
    </div>
    <div className={classes.copyright}>
      Правила. Условия. Конфиденциальность.
      <br /> © 2021 EasyShop
    </div>
  </div>
);

export default Profile;
