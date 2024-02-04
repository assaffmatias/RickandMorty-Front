import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_CHAR, DEL_CHAR } from "./actions"
import swal from "sweetalert"

const initialState = {
    myFavorites: [],
    allCharacters: [],
    characters: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_CHAR:

            if (!state.characters.find((char) => char.id === action.payload.id)) {
                return { ...state, characters: [...state.characters, action.payload] };
            }
            swal("This character already exists", "It is not possible to add repeated characters", "error");
            return state;

        case DEL_CHAR:
            return { ...state, characters: state.characters.filter((char) => char.id !== action.payload) }

        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };

        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload };

        case FILTER:

            if (action.payload === null) {
                // Cuando el filtro es null, devuelve todas las Cards
                return {
                    ...state,
                    myFavorites: state.allCharacters, // O donde tengas todas tus Cards
                };
            } else {
                return {
                    ...state,
                    myFavorites: state.allCharacters.filter((char) => char.gender === action.payload),
                };
            };

        case ORDER:
            return {
                ...state,
                myFavorites: state.allCharacters.sort((a, b) => {
                    if (action.payload === 'A') {
                        return a.id - b.id;
                    };

                    if (action.payload === 'D') {
                        return b.id - a.id
                    }
                    else {
                        return 0
                    }
                })
            }

        default:
            return { ...state }
    }
}

export default rootReducer;