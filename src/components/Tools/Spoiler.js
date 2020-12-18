import React from "react";
import classes from "./Spoiler.module.css";

const Spoiler = ({ name, value }) => {
  const [expand, setExpand] = React.useState(false);
  const expandHandler = () => setExpand(!expand);
  return (
    <div className={classes.collapse}>
      <button
        className={`${classes.collapsible} ${expand && classes.active}`}
        onClick={expandHandler}
      >
       {name}
      </button>
      <div className={`${classes.content} ${expand && classes.expandContent}`}>
        <p>{value}</p>
      </div>
    </div>
  );
};
export default Spoiler;
