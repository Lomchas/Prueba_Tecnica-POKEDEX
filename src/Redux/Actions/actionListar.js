import { typesCards } from "../Types/typesCards";


export const actionListarAsincronico = (numPage) => {
  return async (dispatch) => {
    try {
      const res = await fetch(numPage);
      const data = await res.json();
      const pokemons = await data.results;
      dispatch(actionListarSincronico(pokemons))
    }
    catch (err) {
      console.log(err);
    }
  };
};

export const actionListarSincronico = (data) => {
  return {
    type: typesCards.listar,
    payload: data,
  };
};

export const actionChangePage = (numPage) => {
  return {
    type: typesCards.numPage,
    payload: numPage,
  };
};

export const actionPreviusPage = (numPage) => {
  return {
    type: typesCards.previusPage,
    payload: numPage,
  };
};

export const actionSearchingBar = (search) => {
  return {
    type: typesCards.SearchingBar,
    payload: search,
  };
};
