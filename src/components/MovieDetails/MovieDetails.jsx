import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { getDetails } from "Utils/MovieDB";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './movie-details.css';
import {ReactComponent as BackIcon} from "../../Images/back.svg";
import { ReactComponent as Nophoto} from '../../Images/nophoto.svg';

export const MovieDetails = () => {
    const [movie, setMovie] = useState({
        title:'',
        vote_average:0,
        overview:'',
        poster_path:'',
        genres:[],
        release_date:'',
    })
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
        const load = async () => {
            const result = await getDetails(id);
            setMovie(result.data);
/*             console.log(result.data) */
        }
        if(id) load();
    }, [id])
    const { title, vote_average, overview, poster_path, genres, release_date } = movie;
    const backLink = location.state?.from ?? "/";
    return(
        <div style={{
            padding:"15px"
        }}>
        
        <button type="button" onClick={() => navigate(backLink)} className="back-btn"><BackIcon width="15px" height="15px" /> Go back</button>
        <div className="movie">
            <div>{poster_path ? <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title}/> : <Nophoto />}</div>
                <div>
                    <div>
                    <h2>{title} ({release_date.substring(0, 4)})</h2>
                    <p>User score: <b>{Math.round(vote_average*10)}%</b></p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{genres.map(g => g.name).join(', ')}</p>
                    </div>
                </div>
        </div>
        <h3>Additional information</h3>
        <ul className="additional-memu">
                <Link to="cast" state={{ from: backLink }}>Cast</Link>
                <Link to="reviews" state={{ from: backLink }}>Reviews</Link>
        </ul>
        <Outlet />
        </div>
        
    )
}