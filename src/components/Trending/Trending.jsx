import { getTrending } from "Utils/MovieDB";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Trending = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const load = async () => {
            const result = await getTrending();
            setMovies(result.data.results);
        }
        load();
    }, [])

    
    return(
        <div style={{
            padding:"15px"
        }}>
        <h1 className="title">Trending today</h1>
        <ul className="list">
            {movies.map(({title, id}) => (
            <li key={id} className="list-item">
                <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
            </li>
            ))}
        </ul>
        </div>
    )
}

export default Trending;