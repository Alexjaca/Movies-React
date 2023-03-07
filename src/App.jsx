import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MovieDetails from "./pages/MovieDetails";

export default function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
          </Route>
          <Route path="/" element={<LandingPage />}>
          </Route>
          <Route path="*" element={<h2>404</h2>}></Route>
        </Routes>
      </main>
    </Router>
  );
}

