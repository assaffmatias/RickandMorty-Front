import { connect } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css"
import { filterCards, orderCards } from "../../redux/actions"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

const Favorites = (props) => {
    const { myFavorites } = props;
    const [aux, setAux] = useState(false)

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        const value = event.target.value;
        dispatch(orderCards(value))
        setAux(!aux);
    }

    const handleFilter = (event) => {
        const value = event.target.value;
        if (value === "All") {
            dispatch(filterCards(null))
        } else {
            dispatch(filterCards(value))
        }
    };


    return (
        <div className={style.container}>
            <div className={style.selectContainer}>
                <Link to='/characters'>
                    <button className={style.button}>
                        <svg className={style.svgIcon} viewBox="0 0 384 512">
                            <path
                                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                            ></path>
                        </svg>
                    </button>
                </Link>
                <div>
                    <select className={style.select} onChange={handleFilter}>
                        <option value="All">All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>
                    <select className={style.select} onChange={handleOrder}>
                        <option value="A">Upward</option>
                        <option value="D">Falling</option>
                    </select>
                </div>
            </div>
            <div className={style.cardContainer}>
                {myFavorites.map((char) => {
                    return (
                        <div>
                            <Card
                                key={char.id}
                                id={char.id}
                                image={char.image}
                                name={char.name}
                            />
                        </div>
                    );
                })}
            </div>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};

export default connect(mapStateToProps, null)(Favorites);
