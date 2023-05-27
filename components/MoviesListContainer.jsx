import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import MoviesContext from '../contexts/MoviesContext';
import { getMovieDetails, getByName, getRecommendations, getReviews, getActors, getImage } from './test/Test';

const MoviesListContainer = () => {
    // const { movies, setMovies } = useContext(MoviesContext);
    const [moviesData, setMoviesData] = useState([
        {
            id: '1',
            name: 'The Transformers',
            recommendations: [],
            reviews: [],
            actors: [],
            image: 'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
        },
        {
            id: '2',
            name: 'Star Wars',
            recommendations: [],
            reviews: [],
            actors: [],
            image: 'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
        },
        {
            id: '3',
            name: 'The Lord of the Rings',
            recommendations: [],
            reviews: [],
            actors: [],
            image: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
        },
    ]);
    const movies = ["The Transformers", "The Star Wars", "The Lord of the Rings"];
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             movies.forEach(async (movie, i) => {
    //                 const movieData = await getMovieDetails(movie);
    //                 id = i;
    //                 movieData = { ...movieData, id };
    //                 setMoviesData((prev) => [...prev, movieData]);
    //             });

    //             const filteredArray = moviesData.filter((value) => value.id !== undefined);
    //             setMoviesData(filteredArray);
    //         } catch (error) {
    //             console.log(error.message)
    //         }
    //     };
    //     fetchData();
    //     alert("MoviesListContainer: " + moviesData.length);
    // }, [movies]);


    return (
        <View style={styles.container}>
            <FlatList
                data={moviesData}
                keyExtractor={(item) => item.id}
                horizontal={true}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.itemTitle}>{item.name}</Text>

                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        width: '100%',
        height: 300,
        backgroundColor: 'pink',
        padding: 10,
    },
    itemContainer: {
        marginRight: 10,
        backgroundColor: 'orange',
        borderRadius: 10,
        padding: 10,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 150,
        height: 200,
    },
    image: {
        width: 150,
        height: 200,
        // margin: 5,
    },



});

export default MoviesListContainer;
