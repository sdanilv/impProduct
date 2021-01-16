import React from "react";
import classes from "./Empty.module.css"
import {SadFaceIcon} from "./Icons";

const Empty = (
    {text}
) => {
  return (
    <div className={classes.empty}>

        <SadFaceIcon />
          <p className={classes.emptyText}>
            {text}
          </p>
    </div>
  );
};

export default Empty;
