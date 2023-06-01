import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Image, FlatList, Linking, VirtualizedList } from "react-native";
import { Text } from "react-native-paper";
import { primaryColor, secondaryColor } from "../../../colors";
import FontAwsome from "react-native-vector-icons/FontAwesome";
import { useRoute, useNavigation } from '@react-navigation/native';
import useMovieData from "../../../customHooks/useMovieData";
import { getDetails, getActors } from "../../API/api";

function MovieDetail({ navigation, route }) {

  const [loading, setLoading] = useState(false);
  const [moviesData, setMoviesData] = useState(route.params.movie);

  const getCompleteMovieData = async (movie) => {
    try {
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
        movieData.cast = cast.cast.slice(0, 5);
      }

      return movieData;
    } catch (error) {
      console.log(error);
    }

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

  useEffect(() => {
    const getMovieData = async () => {
      const movieData = await getCompleteMovieData(route.params.movie);
      console.log(movieData)
      setMoviesData(movieData);
    }

    getMovieData();
  }, [route.params.movie]);

  if (loading) {
    return (
      <Text >Loading...</Text>
    );
  }

  return (
    <ScrollView style={{ marginBottom: 40 }}>
      <View style={styles.movieContainer}>

        <View style={styles.moviePoster}>
          <Image
            source={{ uri: moviesData.poster }}
            style={styles.movieImage}
          />
        </View>

        <View style={styles.overlay}>
          <Text style={styles.movieTitle}>{moviesData.title}</Text>
          <Text style={styles.movieYear}>{moviesData.release}</Text>
          <Text style={styles.movieRating}>{moviesData.rating}
            <FontAwsome name="star" size={25} color="#FFD700" />
          </Text>
          <View style={styles.movieGenre}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={moviesData.genres}
              renderItem={({ item }) => (
                  <Text style={styles.movieGenreText}>{item.name}</Text>
              )}
              horizontal={true}
              keyExtractor={(item,index) => index.toString()}
            />

          </View>
        </View>
      </View>
      <View style={styles.movieDetails}>
        <Text style={styles.About}>About Movie</Text>
        <Text style={styles.movieDescription}>
          {moviesData.overview}
        </Text>
      </View>
      <View style={styles.border}></View>
      <View style={styles.movieCast}>
        <Text style={styles.movieCastTitle}>Cast</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={moviesData.cast}
          renderItem={({ item }) => (
            <View style={styles.FlatContainer}>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.profile_path}` }}
                style={styles.movieCastImageContainer}
              />
              <Text style={styles.castName}>{item.name}</Text>
              <Text style={styles.castName}>{item.character}</Text>
            </View>
          )}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

    </ScrollView>
  );
}

export default MovieDetail;

const styles = StyleSheet.create({
  border: {
    borderWidth: 0.5,
    borderColor: primaryColor,
    marginHorizontal: 10,
  },
  FlatContainer: {
    backgroundColor: primaryColor,
    padding: 10,
    margin: 10,
    borderRadius: 6,
  },
  movieCast: {
    padding: 10,
    marginBottom: 20,
  },
  castName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
    color: secondaryColor,
  },
  movieCastTitle: {
    color: secondaryColor,
    fontSize: 26,
    fontWeight: "bold",
  },
  movieCastImageContainer: {
    width: 100,
    height: 130,
    alignSelf: "center",
  },
  movieContainer: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: 10,
  },
  moviePoster: {
    width: "100%",
    height: "100%",
  },
  movieImage: {
    height: 520,
    resizeMode: "contain",
  },
  overlay: {
    position: "absolute",
    height: 674,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
  },
  movieTitle: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "bold",
    top: 500,
    left: 10,
  },
  movieYear: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    top: 500,
    left: 10,
  },
  movieRating: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    top: 500,
    left: 10,
  },
  movieDetails: {
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  movieGenre: {
    flexDirection: "row",
    marginTop: 10,
    top: 500,
    left: 10,
  },
  movieGenreText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: secondaryColor,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
    opacity: 0.6,
  },
  About: {
    marginTop: 110,
    color: secondaryColor,
    fontSize: 26,
    fontWeight: "bold",
  },
  movieDescription: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "justify",
  },
});
