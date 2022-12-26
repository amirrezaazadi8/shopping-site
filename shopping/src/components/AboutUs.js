import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const AboutUs = () => {

    return (
        <div>
            <h1>About Us</h1>
            <ul>
                <li>
                    <Link to="programmers">
                        Programmers
                    </Link>
                </li>
                <li>
                    <Link to="drivers">
                        Drivers
                    </Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );

}

export default AboutUs;