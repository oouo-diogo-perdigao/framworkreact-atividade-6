export const FAVORITES_ADD = "ADD";
export const FAVORITES_REMOVE = "REMOVE";

export const favoritesAdd = fav => ({
  type: FAVORITES_ADD,
  payload: fav
});

export const favoritesRemove = fav => ({
  type: FAVORITES_REMOVE,
  payload: fav
});
