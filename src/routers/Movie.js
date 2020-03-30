import React from "react";
import { MovieView } from "../components/MovieView";

export const Movie = props => <MovieView movieId={props.match.params.id} />;
