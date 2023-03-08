import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import {getMovieImg} from "../utils/getMovieImg";

export default function MovieCard({ movies }) {
  const imageUrl = getMovieImg(movies.poster_path, 300);
  return (
    <li className={styles.MovieCard}>
      <Link to={"/movies/" + movies.id}>
        <img
          width={230}
          height={345}
          src={imageUrl}
          alt={movies.title}
          className={styles.movieImage}
        />
        {movies.title}
      </Link>
    </li>
  );
}
