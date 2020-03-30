import React from "react";
import { MoviesService } from "../services/MoviesService";

export const MovieView = props => {
  const [filmes, setFilmes] = React.useState({});

  React.useEffect(_ => {
    MoviesService.getPopularMovie(props.movieId).then(ret => {
      setFilmes(ret);
    });
  }, []);

  function _mont(data) {
    if (Object.keys(data).length) {
      let movie = data.data;
      console.log(movie);
      return (
        <>
          <main>
            <h1>{movie.title}</h1>
            <img
              alt="Imagem descritiva"
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            ></img>
            <p>{movie.overview}</p>
          </main>
        </>
      );
    } else {
      return <>Carregando</>;
    }
  }
  return <>{_mont(filmes)}</>;
};
