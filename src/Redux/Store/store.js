import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cardsReducer } from "../Reducers/listarReducer";
import { userReducers } from "../Reducers/userReducers";


const reducers = combineReducers({
  users: userReducers,
  pokemons: cardsReducer,
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(thunk)
    )   
);
