import { getCast } from "Utils/MovieDB"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as Nophoto} from '../../Images/nophoto.svg';
import './cast.css'

export const Cast = () => {
    const [cast, setCast] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const load = async() => {
            const data = await getCast(id);
            setCast(data.data.cast)
        }
        load();
    }, [id])
    return(
        <ul className="cast-list">
            {cast.map(({character, name, profile_path, id}) => (
                <li className="actor" key={id}>
                    {profile_path ? <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} /> : <Nophoto />}
                    <p className="actor-name">{name}</p>
                    <p className="actor-char">Character:<br /><b>{character}</b></p>
                </li>
            ))}

        </ul>
    )
}