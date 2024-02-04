import React from "react";
import style from "./Home.module.css"
import logo from "../../public/Home.png"
import { Link } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes";

const Home = () => {
    return (
        <div className={style.container}>
            <div className={style.find}>
                <h1 className={style.h1}>Rick & Morty API</h1>
                <h2 className={style.h2}>Find your favorites rick and morty characters</h2>
                <Link to={PATHROUTES.CHARACTERS}>
                    <button className={style.button}>GO</button>
                </Link>
            </div>
            <div className={style.divImg}>
                <img src={logo} alt="" className={style.img} />
            </div>
        </div>
    )
}

export default Home;