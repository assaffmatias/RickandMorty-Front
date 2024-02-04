import React from "react";
import logo from "../../public/Error.png";
import style from "./Error.module.css";
import { Link } from "react-router-dom";
import PATHROUTES from "../../helpers/PathRoutes"

const Error = () => {


    return (
        <div className={style.container}>
            <div className={style.div1}>
                <h1 className={style.h1}>4 0 4</h1>
                <img className={style.img} src={logo} alt="" />
            </div>
            <div className={style.div}>
                <h2 className={style.h2}>The page you are trying to search has been moved to another universe.</h2>
                <Link to={PATHROUTES.HOME}>
                    <button className={style.button}>BACK TO HOME</button>
                </Link>
            </div>
        </div>
    )
}


export default Error;