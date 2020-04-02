import React from "react";
import { MoviesService } from "../services/MoviesService";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { favoritesAdd, favoritesRemove } from "../actions/favoritesActions";

import { TableAction } from "../presentational/TableAction";

export const MoviesList = () => {
  const [filmes, setFilmes] = React.useState([]);

  const dispatch = useDispatch();
  const selector = useSelector(state => state.favorites);

  React.useEffect(_ => {
    MoviesService.getPopularMovies().then(ret => {
      setFilmes(ret.data.results);
    });
  }, []);

  if (filmes.length > 0) {
    filmes.map(filme => {
      filme.title = <Link to={"/film/" + filme.id}>{filme.title}</Link>;

      filme.action = selector.favorites.filter(e => e.id === filme.id)
        .length ? (
        <button
          onClick={() =>
            dispatch(favoritesRemove({ title: filme.title, id: filme.id }))
          }
        >
          Remove Favorites
        </button>
      ) : (
        <button
          onClick={() =>
            dispatch(favoritesAdd({ title: filme.title, id: filme.id }))
          }
        >
          Add Favorites
        </button>
      );
    });
  }

  console.log(filmes);
  return <TableAction coll={["Filmes", "Ações"]} list={filmes}></TableAction>;
};
