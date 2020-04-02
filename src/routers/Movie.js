import React from "react";
import { MovieView } from "../container/MovieView";

export const Movie = props => <MovieView movieId={props.match.params.id} />;
