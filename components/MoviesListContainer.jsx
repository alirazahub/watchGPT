import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from "react-native";
import MoviesContext from "../contexts/MoviesContext";
import MoviesList from "./MoviesList";
import {
  getByName,
  getRecommendations,
  getReviews,
  getActors,
  getImage,
} from "./API/api";
import { backgroundColor, primaryColor } from '../colors';
// import { AiFillStar } from 'react-icons/ai';
import Spinner from "react-native-loading-spinner-overlay/lib";


const MoviesListContainer = ({ category, movies }) => {
  // const { movies, setMovies } = useContext(MoviesContext);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchData = async (movieNames) => {
      setIsLoading(true);
      try {
        const movies = [];

        for (const movieName of movieNames) {
          const data = await getByName(movieName);

          if (!data || !data.id) {
            continue;
          }

          const movie = {
            id: data.id,
            title: data.original_title,
            overview: data.overview,
            poster: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${data.backdrop_path}`,
            rating: data.vote_average.toFixed(1),
            release: data.release_date.slice(0, 4),
            genres: data.genre_ids,
            language: data.original_language,
          };
          movies.push(movie);
        }
        setIsLoading(false);
        return movies;
      } catch (err) {
        setIsLoading(false);
        console.error(err);
        return [];
      }
    };

    const fetchMoviesData = async () => {
      console.log(movies)
      const data = await fetchData(movies);
      setMoviesData(data);
    };

    fetchMoviesData();
  }, [movies]);


  return (
    <View style={styles.container}>
      <Spinner
      visible={isLoading}
      textContent={'Loading...'}
      textStyle={styles.spinnerTextStyle}
  />
      <Text style={{ color: primaryColor, fontSize: 20, fontWeight: 'bold', margin: 10 }}>{category}</Text>
      <MoviesList moviesData={moviesData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 350,
    backgroundColor: backgroundColor,
    marginBottom: 10,
  },
});

export default MoviesListContainer;
