import axios from 'axios';

export const getTrending = async () => {
    const trending = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=6d41b19df2a832eaff610613527f11cf');
    return trending;
}

export const getDetails = async (id) => {
    const details = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6d41b19df2a832eaff610613527f11cf`);
    return details;
}

export const getCast = async (id) => {
    const cast = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=6d41b19df2a832eaff610613527f11cf`);
    return cast;
}

export const getReviews = async (id) => {
    const reviews = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=6d41b19df2a832eaff610613527f11cf`);
    return reviews;
}

export const searchMovie = async (query) => {
    const reviews = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6d41b19df2a832eaff610613527f11cf&query=${query}&language=en-US&page=1&include_adult=false`);
    return reviews;
}