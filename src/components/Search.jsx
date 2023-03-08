import styles from "./Search.module.css";
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {

  const history = useNavigate();

  const query = useQuery();
  const search = query.get("search"); //obteniendo// ?search= (valor)



  const handleSubmit= (e) =>{
    e.preventDefault();
  }

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}> 
        <input value={search} type="text" className={styles.searchInput} placeholder="Search Movie"
        onChange={(e)=> {
          const value = e.target.value.toLowerCase();
          history("/?search="+value);
        }}/>
        <button type="submit" className={styles.searchButton}><FaSearch size={20}/></button>
      </div>
    </form>
  );
}
