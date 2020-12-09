import React from "react";
import classes from "./Panel.module.css";
import { LikeIcon, LikeIconFull, SendIcon } from "./Tools/Icons";

const Panel = ({ name, price, oldPrice, addLike, liked, removeLike }) => {
  return (
    <div className={classes.panel}>
      <div className={classes.namePanelContainer}>
        <div>{name}</div>
        <div className={classes.panelButtonContainer}>
          {/*<div className={classes.sendIconButton}>*/}
            {/*<SendIcon*/}
            {/*  onClick={() => {*/}
            {/*    if (navigator.share) {*/}
            {/*      console.log("Congrats! Your browser supports Web Share API");*/}

            {/*      // navigator.share принимает объект с URL, title или text*/}
            {/*      navigator*/}
            {/*        .share({*/}
            {/*          title: "Bits and pieces: Web Share APприI article",*/}
            {/*          text:*/}
            {/*            "Web Share API feature is awesome. You must check it",*/}
            {/*          url: window.location.href,*/}
            {/*        })*/}
            {/*        .then(function () {*/}
            {/*          console.log("Shareing successfull");*/}
            {/*        })*/}
            {/*        .catch(function () {*/}
            {/*          console.log("Sharing failed");*/}
            {/*        });*/}
            {/*    } else {*/}
            {/*      console.log(*/}
            {/*        "Sorry! Your browser does not support Web Share API"*/}
            {/*      );*/}
            {/*    }*/}
            {/*  }}*/}
            {/*/>*/}
          {/*</div>*/}
          <div>
            {liked ? (
              <LikeIconFull onClick={() => removeLike()} />
            ) : (
              <LikeIcon onClick={() => addLike()} />
            )}
          </div>
        </div>
      </div>
      <div className={classes.price}>
        <div>{price}&nbsp;грн</div>
        <div className={classes.throughText}>{price+price*0.2}&nbsp;грн</div>
      </div>
    </div>
  );
};

export default Panel;
