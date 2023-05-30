import React from "react";
import { StyleSheet, View, ScrollView, Image, FlatList, Linking, VirtualizedList } from "react-native";
import { Text } from "react-native-paper";
import { primaryColor, secondaryColor } from "../../../colors";
import FontAwsome from "react-native-vector-icons/FontAwesome";

function MovieDetail(props) {
  return (
    <ScrollView style={{ marginBottom: 40 }}>
      <View style={styles.movieContainer}>

        <View style={styles.moviePoster}>
          <Image
            source={require("../../../assets/images.jpeg")}
            style={styles.movieImage}
          />
        </View>

        <View style={styles.overlay}>
          <Text style={styles.movieTitle}>John Wick 4</Text>
          <Text style={styles.movieYear}>2023</Text>
          <Text style={styles.movieRating}>4/5
            <FontAwsome name="star" size={25} color="#FFD700" />
          </Text>
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
      <View style={styles.border}></View>
      <View style={styles.movieCast}>
        <Text style={styles.movieCastTitle}>Cast</Text>
        <FlatList
        showsHorizontalScrollIndicator={false}
          data={[
            {
              key: "1",
              name: "Keanu Reeves",
              image: require("../../../assets/najam.jpeg"),
            },
            {
              key: "2",
              name: "Keanu Reeves",
              image: require("../../../assets/najam.jpeg"),
            },
            {
              key: "3",
              name: "Keanu Reeves",
              image: require("../../../assets/najam.jpeg"),
            },
            {
              key: "4",
              name: "Keanu Reeves sda asd ",
              image: require("../../../assets/images.jpeg"),
            },
            {
              key: "5",
              name: "Keanu Ali Reeves",
              image: require("../../../assets/najam.jpeg"),
            },
            {
              key: "6",
              name: "Keanu Reeve jgk s",
              image: require("../../../assets/najam.jpeg"),
            },
          ]}
          renderItem={({ item }) => (
            <View style={styles.FlatContainer}>
              <Image
                source={item.image}
                style={styles.movieCastImageContainer}
              />
              <Text style={styles.castName}>{item.name}</Text>
            </View>
          )}
          horizontal={true}
          keyExtractor={(item) => item.key}
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
    marginTop: 20,
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: 10,
  },
  movieImage: {
    marginTop: 20,
    height: 520,
    resizeMode: "contain",
  },
  overlay: {
    position: "absolute",
    top: 333,
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
    fontSize: 20,
    fontWeight: "bold",
  },
  movieDetails: {
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  movieGenre: {
    flexDirection: "row",
    marginTop: 10,
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
    marginTop: 60,
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
