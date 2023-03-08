import MoviesGrid from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export default function LandingPage(){

const query = useQuery();
const search = query.get("search"); //pasar la key para que el componente se resetee

const debauncedSearch = useDebounce(search, 300);

    return (<div>
        <Search/>
        <MoviesGrid key={debauncedSearch} search={debauncedSearch}/>
        </div>);
}