import { TMDB_API_KEY } from "../env";
const getByName = async (name) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${name}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDB_API_KEY}`
        }
    };

    try {
        const res = await fetch(url, options);
        const json = await res.json();
        const data = json.results[0];
        return data;
    } catch (err) {
        throw new Error('Error: ' + err);
    }
}
const getRecommendations = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDB_API_KEY}`
        }
    };

    try {
        const res = await fetch(url, options);
        const data = await res.json();
        return data.results;
    } catch (err) {
        throw new Error('Error: ' + err);
    }
}

const getReviews = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDB_API_KEY}`
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => (json.stringify()))
        .catch(err => console.error('error:' + err));
}

const getActors = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDB_API_KEY}`
        }
    };

    try {
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
    } catch (err) {
        throw new Error('Error: ' + err);
    }
}
const getImage = (path) => {
    const url = `https://image.tmdb.org/t/p/w500${path}`;
    return url;
}
const getDetails = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDB_API_KEY}`
        }
    };
    try {
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
    } catch (err) {
        throw new Error('Error: ' + err);
    }
}

const getTrendingMovies = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDB_API_KEY}`
        }
    };

    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

    try {
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
    } catch (err) {
        throw new Error('Error: ' + err);
    }
}


export { getTrendingMovies, getByName, getRecommendations, getReviews, getActors, getImage, getDetails }