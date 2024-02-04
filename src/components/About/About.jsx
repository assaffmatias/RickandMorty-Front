import React from "react";
import style from './About.module.css';
import logo from "../../public/About.png";

const About = () => {

    return (
        <div className={style.container}>
            <div className={style.div_img}>
                <img src={logo} className={style.img} />
            </div>

            <div className={style.info}>
                <h1 className={style.h1}>Hi i'm Matias</h1>
                <h2 className={style.h2}>This is my Rick and Morty project</h2>
            </div>            
        </div>
    )
}

export default About;

