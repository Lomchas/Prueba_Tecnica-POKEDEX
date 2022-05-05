import { typesCards } from "../Types/typesCards";

const initialState = {
    results: '',
    numPage: 0,
    searchingBar: ''
}

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesCards.listar:
            return {
                ...state,
                results: [...action.payload]
            }
        case typesCards.numPage:
            return {
                ...state,
                numPage: action.payload
            }
        case typesCards.SearchingBar:
            return {
                ...state,
                searchingBar: action.payload
            }
        default:
            return state;
    }
}