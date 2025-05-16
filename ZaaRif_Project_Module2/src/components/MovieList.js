import React, { useState } from "react";
import { Link } from "react-router-dom";
import { movies } from "../data/moviesData";

export default function MovieList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Movie Database</h1>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "0.5rem", width: "100%", marginBottom: "1rem" }}
      />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredMovies.map((movie) => (
          <li key={movie.id} style={{ marginBottom: "0.5rem" }}>
            <Link
              to={`/movies/${movie.id}`}
              style={{ textDecoration: "none", color: "blue" }}
            >
              {movie.title} ({movie.year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}