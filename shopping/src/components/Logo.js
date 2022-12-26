import React from 'react';
import style from "./Logo.module.css";
import apple from "../images/apple.jpg";
import samsung from "../images/samsung.jpg";
import xiaomi from "../images/xiaomi.png";

const Logo = () => {
    return (
        <div className={style.container}>
            <h3>Who support Us?</h3>
            <div>
                <img src={apple} alt='logo'></img>
                <img src={samsung} alt='logo'></img>
                <img src={xiaomi} alt='logo'></img>
            </div>
        </div>
    )
}


export default Logo;