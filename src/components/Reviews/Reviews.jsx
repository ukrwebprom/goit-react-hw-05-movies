import { getReviews } from "Utils/MovieDB"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const load = async() => {
            const data = await getReviews(id);
            setReviews(data.data.results);
        }
        load();
    }, [id])

    return(
        <>
        {reviews.length ? 
        <ul>
            {reviews.map(({author, content, id}) => (
                <li key={id}>
                    <p><b>Author: {author}</b></p>
                    <p>{content}</p>
                </li>
            ))}
        </ul>
        
        : <p>We don't have any reviews for this movie.</p>
        }
        </>
    )
}

export default Reviews