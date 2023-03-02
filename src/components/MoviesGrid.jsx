//import movies from "./movies.json";
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";

export default function MoviesGrid() {
  //let movies = [];
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
        setMovies(data.results);
      });
  },[]);
  return (
    <ul className={styles.MoviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movies={movie} />
      ))}
    </ul>
  );
}
