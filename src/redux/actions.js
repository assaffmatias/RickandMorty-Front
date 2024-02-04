import axios from "axios";
import swal from "sweetalert"
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const GET_CHAR = 'GET_CHAR'
export const DEL_CHAR = 'DEL_CHAR'

// axios.defaults.baseURL = "http://localhost:3001/rickandmorty"
axios.defaults.baseURL = "https://rickandmorty-back-production-73a7.up.railway.app/"


export const charById = (id) => {
   return async function (dispatch) {
      try {
         const { data } = await axios.get(`https://rickandmorty-back-production-73a7.up.railway.app/character/${id}`)

         dispatch({ type: GET_CHAR, payload: data })
      } catch (error) {
         swal("This character does not exist", "Try a number between 1 and 826", "error");
      }
   }
}

export const deleteChar = (id) => {
   return {
      type: DEL_CHAR,
      payload: id,
   }
}

export const addFav = (character) => {
   const endpoint = 'https://rickandmorty-back-production-73a7.up.railway.app/fav';
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      });
   };
};

export const removeFav = (id) => {
   const endpoint = 'https://rickandmorty-back-production-73a7.up.railway.app/fav/' + id;
   return (dispatch) => {
      axios.delete(endpoint).then(({ data }) => {
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      });
   };
};

export const filterCards = (gender) => {
   return {
      type: FILTER,
      payload: gender,
   }
};

export const orderCards = (orden) => {
   return {
      type: ORDER,
      payload: orden,
   };
};


