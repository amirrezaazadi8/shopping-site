import React from 'react';
import style from "./Search.module.css";

const Search=()=> {
  return (
    <div className={style.container}>
        <p>Search what you want?</p>
        <input placeholder='search'></input>
    </div>
  )
}


export default Search;