import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import MoviesContext from "../contexts/MoviesContext";
import {
  getByName,
  getRecommendations,
  getReviews,
  getActors,
  getImage,
} from "./test/Test";
import { backgroundColor, primaryColor } from '../colors';
// import { AiFillStar } from 'react-icons/ai';


const MoviesListContainer = () => {
  const { movies, setMovies } = useContext(MoviesContext);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchData = async (movieNames) => {
      setIsLoading(true);
      try {
        const movies = [];

        for (const movieName of movieNames) {
          const data = await getByName(movieName);

          if (!data) {
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
      const data = await fetchData(movies);
      setMoviesData(data);
    };

    fetchMoviesData();
  }, [movies]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
      showsHorizontalScrollIndicator={false}
        data={moviesData}
        keyExtractor={(movie) => movie.id.toString()}
        horizontal={true}
        renderItem={({ item: movie }) => (
          <View style={styles.movieContainer}>
            <Image source={{ uri: movie.poster }} style={styles.image} />
            <Text style={styles.movieRating}> {movie.rating}</Text>
            <Text style={styles.movieTitle}>{movie.title}</Text>
            <Text style={styles.movieSubtitle}>{movie.release}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 285,
        backgroundColor:backgroundColor
    },
    movieContainer: {
        marginRight: 10,
        backgroundColor: primaryColor,
        borderRadius: 10,
        padding: 10,
    },

  movieRating: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
  },

  movieTitle: {
    fontSize: 16,
    fontWeight: "bold",
    width: 150,
  },

  movieSubtitle: {
    fontSize: 16,
    width: 150,
  },
  image: {
    width: 150,
    height: 200,
  },
});

export default MoviesListContainer;
