import React, { useState, useEffect } from 'react';
import { getByName, getDetails, getActors } from '../API/api';

function useMovieData(movieName) {
    const [loading, setLoading] = useState(false);
    const [moviesData, setMoviesData] = useState();

    useEffect(() => {
        const fetchMoviesData = async () => {
            setLoading(true);
            try {

                const movie = await getByName(movieName);
                if (!movie || !movie.id) {
                    return null;
                }
                const movieData = await getCompleteMovieData(movie);
                let data = movieData;

                setLoading(false);
                setMoviesData(data);
            } catch (error) {
                setLoading(false);
                console.error(error);
                setMoviesData(null);
            }
        };

        fetchMoviesData();
    }, [movieName]);

    const getCompleteMovieData = async (movie) => {
        const movieData = {
            ...movie,
            runtime: 0,
            cast: [],
        };

        const [details, cast] = await Promise.all([
            getMovieDetails(movie.id),
            getMovieCast(movie.id),
        ]);

        if (details) {
            movieData.runtime = details.runtime;
            movieData.genres = details.genres;
        }

        if (cast) {
            movieData.cast = cast;
        }

        return movieData;
    };

    const getMovieDetails = async (movieId) => {
        setLoading(true);
        try {
            const movie = await getDetails(movieId);
            setLoading(false);
            return movie;
        } catch (error) {
            setLoading(false);
            console.error(error);
            return null;
        }
    };

    const getMovieCast = async (movieId) => {
        setLoading(true);
        try {
            const cast = await getActors(movieId);
            setLoading(false);
            return cast;
        } catch (error) {
            setLoading(false);
            console.error(error);
            return null;
        }
    };

    return { loading, moviesData };
}

export default useMovieData;
