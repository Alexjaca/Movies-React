import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  //LLamada asincrona a una api
  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setIsLoading(false);
      setMovie(data);
    });
  }, [movieId]);

  if (true) { //IsLoading va aqui
    return <Spinner/>;
  }

  if (!movie) {
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={styles.col + " " + styles.movieImage}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.title}>
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Idiomas: </strong>
          {movie.spoken_languages.map((spoken) => spoken.name).join(" , ")}
        </p>
        <p>
          <strong>Genero: </strong>
          {movie.genres.map((genre) => genre.name).join(" , ")}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
