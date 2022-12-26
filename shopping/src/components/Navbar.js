import React from 'react';
import style from "./Navbar.module.css";
import logo from "../images/Logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <React.Fragment>

            <nav className={style.header}>

                <ul className={style.list}>
                    <li>
                        <Link to="/">Home page</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/aboutUs">About us</Link>
                    </li>
                </ul>

                <div >
                    <img className={style.logo} src={logo} alt="logo"></img>
                </div>
            </nav>

        </React.Fragment>
    )
}


export default Navbar;