import { FAVORITES_ADD, FAVORITES_REMOVE } from "../actions/favoritesActions";

const initialState = {
  favorites: []
};

export const favorites = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITES_ADD:
      let favorites = state.favorites;

      //Assegura que nao vai re-adicionar objeto com id repetido
      if (!state.favorites.find(obj => obj.id === action.payload)) {
        favorites = [...state.favorites, action.payload];
      }
      console.log(favorites);
      return {
        ...state,
        favorites: favorites
      };

    case FAVORITES_REMOVE:
      console.log(state.favorites);
      console.log(action.payload);

      let newState = state.favorites.filter(e => e.id !== action.payload.id);
      console.log(state.favorites.filter(e => e.id !== action.payload.id));

      return {
        ...state,
        favorites: newState
      };
    default:
      return state;
  }
};
