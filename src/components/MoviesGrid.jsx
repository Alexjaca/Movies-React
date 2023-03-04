//import movies from "./movies.json";
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
import { useQuery } from "../hooks/useQuery";


export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //const location = useLocation();

  const query = useQuery();
  const search = query.get("search"); //obteniendo// ?search= (valor)

  useEffect(() => {
    setIsLoading(true);
    // es un if search existe y si no poner "/discover/movie"
    const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie";                          
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.MoviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movies={movie} />
      ))}
    </ul>
  );
}
