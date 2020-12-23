import React, { useState } from "react";
import classes from "./Carousel.module.css";
import {useEffect} from "react";
const Carousel = ({ imgs = [] }) => {
  useEffect(()=>setViewImg(0), [imgs]);
  const [viewImg, setViewImg] = useState(0);
  const [start, setStart] = useState(0);
  const next = () => {
    if (viewImg === imgs.length - 1) {
      setViewImg(0);
    } else setViewImg(viewImg + 1);
  };
  const prev = () => {
    if (viewImg === 0) {
      setViewImg(imgs.length - 1);
    } else setViewImg(viewImg - 1);
  };
  const touchEndHandler = (eve) => {
    const swipeLength = start - eve.changedTouches[0].clientX;
    if (imgs < 1 || swipeLength ** 2 < 2000) return;
    if (swipeLength < -50) prev();
    if (swipeLength > 50) next();
  };
  const touchStartHandler = (eve) => {setStart(eve.touches[0].clientX)};

  const imgsMap = imgs.map((img, i) => (
    <img
      onTouchStart={touchStartHandler}
      onTouchEnd={touchEndHandler}
      alt="Carousel"
      src={img}
      className={`${ classes.img} ${i === viewImg ? classes.selectImg : ""}`}
      onClick={next}
      key={i}
    />
  ));
  const gabsMap = [];
  for (let i = 0; i < imgs.length; i++)
    gabsMap.push(
      <span
          key={i}
        onClick={() => setViewImg(i)}
        className={`${classes.dote} ${viewImg === i && classes.select}`}
      >
        _
      </span>
    );
  return (
    <div className={classes.carousel}>
      <div>{imgsMap}</div>
      <div className={classes.dotes}>{gabsMap}</div>
    </div>
  );
};

export default Carousel;
