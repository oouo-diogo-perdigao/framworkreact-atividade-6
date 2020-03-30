import React from "react";
import { MoviesService } from "../services/MoviesService";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { favoritesAdd, favoritesRemove } from "../actions/favoritesActions";

export const MoviesList = () => {
  const [filmes, setFilmes] = React.useState([]);

  const dispatch = useDispatch();
  const selector = useSelector(state => state.favorites);

  React.useEffect(_ => {
    MoviesService.getPopularMovies().then(ret => {
      setFilmes(ret.data.results);
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <td>Filme</td>
          <td>Ação</td>
        </tr>
      </thead>
      <tbody>
        {filmes.map(f => (
          <tr key={f.id}>
            <td>
              <Link to={"/film/" + f.id}>{f.title}</Link>
            </td>
            <td>
              {selector.favorites.filter(e => e.id === f.id).length ? (
                <button
                  onClick={() =>
                    dispatch(favoritesRemove({ title: f.title, id: f.id }))
                  }
                >
                  Remove Favorites
                </button>
              ) : (
                <button
                  onClick={() =>
                    dispatch(favoritesAdd({ title: f.title, id: f.id }))
                  }
                >
                  Add Favorites
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
