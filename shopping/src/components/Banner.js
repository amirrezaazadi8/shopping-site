import React from 'react';
import style from "./Banner.module.css";
import banner from "../images/banner.jpg";

const Banner = () => {
    return (
        <div className={style.container}>
            <img src={banner} alt="banner"></img>
            <div className={style.textContainer}>
                <h1>Store</h1>
                <h2>shopping <span>everything </span></h2>
            </div>
        </div>
    )
}


export default Banner;