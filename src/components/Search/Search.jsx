import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchMovie } from "Utils/MovieDB";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './search.css';
import {ReactComponent as SearchIcon} from "../../Images/search.svg";

export const Search = () => {
    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    const location = useLocation();

    useEffect(() => {
        const load = async () => {
            const data = await searchMovie(query);
            setMovies(data.data.results);
        }
        if(query) load();
    }, [searchParams])

    const searchSubmit = e => {
        e.preventDefault();
        setSearchParams({query:e.target.elements.query.value});
    }
    return(
        <div style={{
            padding:"15px"
        }}>
        <form onSubmit={searchSubmit} className="form">
            <input name="query" className="form-input" />
            <button type="Submit" className="form-btn"><SearchIcon width="15px" height="15px" /> Search</button>
        </form>
        {movies.length ? 
        <ul>
            {movies.map(({id, title}) => (
                <li key={id}>
                    <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
                </li>
            ))}
        </ul>
        : <p>{query ? "No Movies found":''}</p>
        }
        </div>
        
    )
}