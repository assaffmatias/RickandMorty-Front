import React from "react";
import style from "./Detail.module.css"
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'

const Detail = () => {

    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const location = useNavigate()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    const goBack = () => {
        location(-1)
    }

    const getStatusClass = () => {
        return character.status === 'Alive' ? style.alive : style.dead;
    };


    return (
        <div className={style.container}>
            <div className={style.div_button}>
                <button className={style.button} onClick={goBack}>
                    <svg className={style.svgIcon} viewBox="0 0 384 512">
                        <path
                            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className={style.content}>
                <div className={style.div_img}>
                    {/* <img className={style.img} src={character?.image} alt={character?.name} /> */}
                    <img className={`${style.img} ${getStatusClass()}`} src={character?.image} alt={character?.name} />
                    <h2 className={`${style.h2} ${getStatusClass()}`}>{character?.status}</h2>
                    <h1 className={style.name}>{character?.name}</h1>
                </div>
                <div className={style.info}>
                    <div className={style.properties}>━━━ <h3 className={style.h3}>PROPERTIES</h3> ━━━</div>
                    <div className={style.data}>
                        <h3 className={style.info_data}>GENDER </h3>
                        <h4 className={style.h4}>{character?.gender}</h4>
                    </div>
                    <div className={style.data}>
                        <h3 className={style.info_data}>SPECIES </h3>
                        <h4 className={style.h4}>{character?.species}</h4>
                    </div>
                    <div className={style.data}>
                        <h3 className={style.info_data}>STATUS </h3>
                        <h4 className={style.h4}>{character?.status}</h4>
                    </div>
                    <div className={style.data}>
                        <h3 className={style.info_data}>ORIGIN </h3>
                        <h4 className={style.h4}>{character?.origin?.name}</h4>
                    </div>
                </div>
            </div>

            {/* <div className={style.divButton}>
                <button className={style.button} onClick={goBack}>
                    <svg className={style.svgIcon} viewBox="0 0 384 512">
                        <path
                            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className={style.container2}>
                <div className={style.Divimg}>
                    <img className={style.img} src={character?.image} alt={character?.name} />
                </div>
                <div className={style.info}>
                    <h1 className={style.h1}>{character?.name}</h1>
                    <div className={style.status}>
                        <p className={`${style.p} ${getStatusClass()}`}>·</p>
                        <h2 className={style.h2}>{character?.status}</h2>
                    </div>
                    <h3 className={style.h3}>Specie: </h3>
                    <h4 className={style.h4}>{character?.species}</h4>
                    <h3 className={style.h3}>Gender: </h3>
                    <h4 className={style.h4}>{character?.gender}</h4>
                    <h3 className={style.h3}>Origin:</h3>
                    <h4 className={style.h4}>{character.origin?.name}</h4>
                </div>
            </div> */}
        </div>
    )
}

export default Detail;