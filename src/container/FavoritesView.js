import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { favoritesRemove } from "../actions/favoritesActions";

import { TableAction } from "../presentational/TableAction";

export const FavoritesView = () => {
  const selector = useSelector(state => state.favorites);
  const dispatch = useDispatch();
  console.log(selector);

  if (selector.favorites.length > 0) {
    selector.favorites.map(filme => {
      filme.title = <Link to={"/film/" + filme.id}>{filme.title}</Link>;

      filme.action = (
        <button
          onClick={() =>
            dispatch(favoritesRemove({ title: filme.title, id: filme.id }))
          }
        >
          Remove Favorites
        </button>
      );
    });
  }

  return (
    <TableAction
      coll={["Filmes", "Ações"]}
      list={selector.favorites}
    ></TableAction>
  );
};
