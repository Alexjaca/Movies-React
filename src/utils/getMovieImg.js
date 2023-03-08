import noImage from "../assets/images/no-image.png";

export function getMovieImg(path, width) {
    return (
        path ? "https://image.tmdb.org/t/p/w"+width + path
  :noImage
    );
}