import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MovieDetails from "./pages/MovieDetails";
import tachira from "./assets/images/tachira.png";

export default function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <div className={styles.container}>
          <h1 className={styles.title}>JAC Movies <img src={tachira} alt="tachira" className={styles.tachira}/></h1>
          
          </div>
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

