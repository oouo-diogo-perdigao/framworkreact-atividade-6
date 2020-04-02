import React from "react";
import { MoviesService } from "../services/MoviesService";

import { SimpleArticle } from "../presentational/SimpleArticle";

export const MovieView = props => {
  const [filmes, setFilmes] = React.useState({});

  React.useEffect(_ => {
    MoviesService.getPopularMovie(props.movieId).then(ret => {
      setFilmes(ret);
    });
  }, []);

  function _mont(filmes) {
    if (Object.keys(filmes).length) {
      console.log(filmes.data);
      let legend = "";
      if (filmes.data.belongs_to_collection) {
        legend = filmes.data.belongs_to_collection.name;
      }

      return (
        <SimpleArticle
          title={filmes.data.title}
          imgSrc={"https://image.tmdb.org/t/p/w500" + filmes.data.poster_path}
          legend={legend}
          text={filmes.data.overview}
        ></SimpleArticle>
      );
    } else {
      return <>Carregando</>;
    }
  }
  return <>{_mont(filmes)}</>;
};
