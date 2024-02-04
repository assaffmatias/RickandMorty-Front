import Card from '../Card/Card';
import style from './Cards.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { charById, deleteChar } from '../../redux/actions';
import swal from "sweetalert"

export default function Cards() {

   const dispatch = useDispatch()

   const characters = useSelector(state => state.characters)

   const onSearch = (id) => {
      dispatch(charById(id))
   }

   const onClose = (id) => {
      dispatch(deleteChar(id))
      swal("Deleted Character", "Press OK to continue", "success");
   }

   const getRandomId = () => {
      let randomId;
      do {
         randomId = Math.floor(Math.random() * 826);
      } while (characters.some((char) => char.id === randomId));
      return randomId;
   };

   const random = () => {
      let randomId;
      if (characters.length > 0) {
         randomId = getRandomId();
      } else {
         randomId = Math.floor(Math.random() * 826);
      }
      onSearch(randomId);
   };

   return (
      <div className={style.container}>
         <div className={style.searchBar}>
            <SearchBar onSearch={onSearch} />
            {/* <button onClick={random} className={style.button}>Random</button> */}
         </div>
         <div className={style.cards}>
            {characters.map((char) => {
               return (
                  <Card
                     key={char.id}
                     id={char.id}
                     name={char.name}
                     status={char.status}
                     species={char.species}
                     gender={char.gender}
                     origin={char.origin.name}
                     image={char.image}
                     onClose={onClose}
                  />
               )
            })}
         </div>

      </div>
   )
}