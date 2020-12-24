import React from "react";
import classes from "./SearchInput.module.css"
import { SearchIconFull} from "./Icons";

const SearchInput = (props) => (
  <div className = {classes.search}>
    <input {...props}  placeholder="Введите запрос" className={classes.searchInput}/>
    <button  className={classes.searchButton}><SearchIconFull size={16} /></button>
  </div>
);

export default SearchInput;
