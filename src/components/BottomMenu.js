import React from "react";
import {  Row } from "antd";
import classes from "./BottomMenu.module.css";

import {
  AddIcon,
  HomeIcon,
  HomeIconFull,
  LikeIcon,
  LikeIconFull,
  SearchIcon,
  SearchIconFull,
} from "./Tools/Icons";

const BottomMenu = ({
  tab,
  selectTab,
  countLike,
  seeLikedCards,
  seeAllCards,
  seeSearchedCards,
}) => {
  return (
    <div className={classes.footer}>
      <Row justify="space-around" align="middle" style={{ width: "100%" }}>
        {tab === 1 ? (
          <HomeIconFull />
        ) : (
          <HomeIcon
            onClick={() => {
              seeAllCards();
              selectTab(1);
            }}
          />
        )}
        {tab === 2 ? (
          <SearchIconFull />
        ) : (
          <SearchIcon
            onClick={() => {
              window.scrollTo(0, 0);
              seeSearchedCards();
              selectTab(2);
            }}
          />
        )}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdn2MwSLuLq3URztfZMojmlcG0fOigl_OebfWoOAbk5K32IPw/viewform?usp=sf_link"
        >
          <AddIcon />
        </a>
        {/*<Badge size="small" count={countLike}>*/}
          <div badge={countLike}>
          {tab === 4 ? (
            <LikeIconFull />
          ) : (
            <LikeIcon
              onClick={() => {
                seeLikedCards();
                selectTab(4);
              }}
            />
          )}
          </div>

        <div className={tab === 5 ? classes.bottomAvaBorder: classes.bottomAvaWithoutBorder}>
          <img
            onClick={() => {
              seeAllCards();
              selectTab(5);
            }}
            className={classes.bottomAva}
            src="https://mcusercontent.com/ece05dfe187189e74ea128620/images/bcdc32ce-5eae-4db9-9d40-ce08395bb0c4.jpg"
            alt="bottomAva"
          />
        </div>
      </Row>
    </div>
  );
};

export default BottomMenu;
