import React from 'react';
import style from './Nav.module.css'
import logo from '../../public/Wellcome.png'
import { Link, useLocation } from 'react-router-dom';
import PATHROUTES from '../../helpers/PathRoutes';

export default function Nav({ onSearch }) {
    const location = useLocation();

    // if (location.pathname === '/') {
    //     return null;
    // }

    return (
        <nav className={style.nav}>
            <div className={style.right}>
                <Link to={PATHROUTES.HOME}>
                    <button className={style.button}>Home</button>
                </Link>
                <Link to={PATHROUTES.CHARACTERS}>
                    <button className={style.button}>Characters</button>
                </Link>
            </div>

            <div>
                <img src={logo} alt="" className={style.img} />
            </div>

            <div className={style.left}>
                <Link to={PATHROUTES.FAVORITES}>
                    <button className={style.button}>Favorites</button>
                </Link>
                <Link to={PATHROUTES.ABOUT}>
                    <button className={style.button}>About</button>
                </Link>
            </div>
        </nav>
    )
}