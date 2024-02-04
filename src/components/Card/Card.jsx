import style from './Card.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { removeFav, addFav } from '../../redux/actions';
import { connect } from 'react-redux';

const Card = (props) => {
   const { onClose } = props;

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = (event) => {
      event.preventDefault()
      if (isFav) {
         setIsFav(false);
         props.removeFav(props.id);
      } else {
         setIsFav(true);
         props.addFav(props);
      }
   };

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites, props.id]);

   const { pathname } = useLocation();


   return (

      <div className={style.container}>
         <div className={style.card}>
            <img className={style.img} src={props.image} alt='' />
            <div className={style.card__content}>
               <Link to={`/detail/${props.id}`}>
                  <h2 className={style.name}>{props.name}</h2>
               </Link>
               {
                  isFav ? (
                     <button className={style.boton_fav} onClick={handleFavorite}>★ Favorites</button>
                  ) : (
                     <button className={style.boton_fav} onClick={handleFavorite}>✩ Favorites</button>
                  )}
               {pathname !== "/favorites" && (
                  <button className={style.boton} onClick={() => onClose(props.id)}>✗</button>
               )}
               

            </div>
         </div>

      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      },
   }
}
const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);