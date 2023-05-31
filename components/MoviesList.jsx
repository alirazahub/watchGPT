import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import { backgroundColor, primaryColor } from '../colors';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const MoviesList = ({ moviesData }) => {
    const navigation = useNavigation();

    const handleMoviePress = (movie) => {
        navigation.navigate('Detail', { movie });
    };

    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            data={moviesData}
            keyExtractor={(movie) => movie.id.toString()}
            horizontal={true}
            renderItem={({ item: movie }) => (
                <TouchableOpacity onPress={() => handleMoviePress(movie)}>
                    <View style={styles.movieContainer}>
                        <Image source={{ uri: movie.poster }} style={styles.image} />
                        <Text style={styles.movieRating}>{movie.rating}</Text>
                        <Text style={styles.movieTitle}>{movie.title}</Text>
                        <Text style={styles.movieSubtitle}>{movie.release}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default MoviesList

const styles = StyleSheet.create({
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
})