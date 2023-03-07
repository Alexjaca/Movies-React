import styles from "./Search.module.css";
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {

  const [seacrhText, setSeacrhText] = useState("");
  const history = useNavigate();

  const query = useQuery();
  const search = query.get("search"); //obteniendo// ?search= (valor)

  useEffect(()=>{
      setSeacrhText(search || "");
  }, [search]);

  const handleSubmit= (e) =>{
    e.preventDefault();
    history("/?search="+seacrhText);

  }

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}> 
        <input id="textSearch" type="text" className={styles.searchInput} placeholder="Search Movie"
        onChange={(e)=> setSeacrhText(e.target.value.toLowerCase())}/>
        <button type="submit" className={styles.searchButton}><FaSearch size={20}/></button>
      </div>
    </form>
  );
}
