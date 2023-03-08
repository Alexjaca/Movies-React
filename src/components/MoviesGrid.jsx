//import movies from "./movies.json";
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import {Empty} from "./Empty";


export default function MoviesGrid({search}) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);



  useEffect(() => {
    setIsLoading(true);
    // es un if search existe y si no poner "/discover/movie"
    const searchUrl = search 
    ? "/search/movie?query=" + search + "&page=" + page
    : "/discover/movie?page=" + page;                          
    get(searchUrl).then((data) => {
      setMovies((prevMovies)=> prevMovies.concat(data.results));//aqui esta el error me concatena en la busqueda
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  if(!isLoading && movies.length === 0){
    return <Empty/>
  }

  return (
  <InfiniteScroll 
  dataLength={movies.length} 
  hasMore={hasMore} 
  next={()=> setPage((prevPage) => prevPage + 1)}
  loader={<Spinner />}>
    <ul className={styles.MoviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movies={movie} />
      ))}
    </ul>
  </InfiniteScroll>
  );
}
