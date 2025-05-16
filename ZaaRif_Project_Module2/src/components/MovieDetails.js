import React from "react";
import { useParams, Link } from "react-router-dom";
import { movies } from "../data/moviesData";

export default function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div style={{ padding: "1rem" }}>
        <h2>Movie not found</h2>
        <Link to="/">Back to list</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>
        {movie.title} ({movie.year})
      </h2>
      <p>{movie.description}</p>
      <Link to="/">← Back to list</Link>
    </div>
  );
}