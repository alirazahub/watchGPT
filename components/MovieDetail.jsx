import React from "react";
import { StyleSheet, View, ScrollView, Image, FlatList } from "react-native";
import { Text } from "react-native-paper";

function MovieDetail(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.movieContainer}>
        <View style={styles.moviePicture}>
          <Image
            source={require("../assets/images.jpeg")}
            style={styles.movieImage}
          />
        </View>

        <View style={styles.overlay}>
          <Text style={styles.movieTitle}>John Wick 4</Text>
          <Text style={styles.movieYear}>2023</Text>
          <Text style={styles.movieRating}>4 out of 5</Text>
          <View style={styles.movieGenre}>
            <Text style={styles.movieGenreText}>Action</Text>
            <Text style={styles.movieGenreText}>Thriller</Text>
            <Text style={styles.movieGenreText}>Crime</Text>
          </View>
        </View>
      </View>
      <View style={styles.movieDetails}>
        <Text style={styles.About}>About Movie</Text>
        <Text style={styles.movieDescription}>
          John Wick uncovers a path to defeating The High Table. But before he
          can earn his freedom, Wick must face off against a new enemy with
          powerful alliances across the globe and forces that turn old friends
          into foes.
        </Text>
      </View>
      <View style={styles.movieCast}>
        <Text style={styles.movieCastTitle}>Cast</Text>
        <View style={styles.movieCastContainer}>
          <View style={styles.movieCastImageContainer}>
            <Image
              source={require("../assets/najam.jpeg")}
              style={styles.movieCastImageContainer}
            />
            <Text style={styles.castName}>Najam</Text>
          </View>

          <View style={styles.movieCastImageContainer}>
            <Image
              source={require("../assets/najam.jpeg")}
              style={styles.movieCastImageContainer}
            />
            <Text style={styles.castName}>Najam</Text>
          </View>

          <View style={styles.movieCastImageContainer}>
            <Image
              source={require("../assets/najam.jpeg")}
              style={styles.movieCastImageContainer}
            />
            <Text style={styles.castName}>Najam</Text>
          </View>

          <View style={styles.movieCastImageContainer}>
            <Image
              source={require("../assets/najam.jpeg")}
              style={styles.movieCastImageContainer}
            />
            <Text style={styles.castName}>Najam</Text>
          </View>

          <View style={styles.movieCastImageContainer}>
            <Image
              source={require("../assets/najam.jpeg")}
              style={styles.movieCastImageContainer}
            />
            <Text style={styles.castName}>Najam</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MovieDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#041014",
  },
  movieContainer: {
    marginTop: 20,
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: 10,
  },
  moviePicture: {
    width: "100%",
    height: "100%",
  },
  movieImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  overlay: {
    position: "absolute",
    bottom: 20,
    left: 30,
  },
  movieTitle: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "bold",
  },
  movieYear: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  movieRating: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  movieDetails: {
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  movieDescription: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  movieCast: {
    padding: 10,
    marginBottom: 20,
  },
  movieCastTitle: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  movieCastContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  movieCastImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
  },
  movieGenre: {
    flexDirection: "row",
    marginTop: 10,
  },
  movieGenreText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
    backgroundColor: "#041014",
    padding: 5,
    borderRadius: 10,
    opacity: 0.7,
  },
  About: {
    color: "#145369",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  castName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    textAlign: "center",
  },
});
