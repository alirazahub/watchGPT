import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, KeyboardAvoidingView, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import useApiCall from "../../utilities/GetDataFromChatGPT";
import MoviesContext from "../../../contexts/MoviesContext";
import MoviesListContainer from "../../MoviesListContainer";
import { primaryColor, secondaryColor, backgroundColor } from '../../../colors'
import { getTrendingMovies } from "../../API/api";
import MoviesList from "../../MoviesList";
import SearchContext from "../../../contexts/SearchContext";
import { storeSearchQuery, getSearchHistory } from "../../../customHooks/useSearchHistory";
import UserAuthContext from "../../../contexts/UserAuthContext";

function Home({ navigation }) {

    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const { movies, setMovies } = useContext(MoviesContext);
    const [categoryArray, setCategoryArray] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const { searchHistory, setSearchHistory } = useContext(SearchContext);
    const { user, setUser } = useContext(UserAuthContext)

    const { fetchData } = useApiCall();

    const handleTextChange = (inputText) => {
        setText(inputText);
    };


    function addNamesToArray(namesString) {
        const namesArray = namesString.split(',').map(name => name.trim());
        return namesArray;
    }
    const addCategoriesToArray = (newData) => {
        let categoryArray = [];
        const lines = newData.split('\n');

        lines.forEach((line) => {

            const category = line.substring(0, line.indexOf(':'));
            const titles = line.substring(line.indexOf(':') + 1).split(';');
            categoryArray.push({ category: category.trim(), titles: titles.map((title) => title.trim()) });
        });

        return categoryArray;
    }


    const handleButtonPress = async () => {
        setLoading(true);
        let new_text = text.trim();
        if (new_text.length > 0) {
            try {
                const newData = await fetchData(new_text);
                // console.log(newData)
                setLoading(false);
                setCategoryArray(addCategoriesToArray(newData));
                storeSearchQuery(user.uid, { prompt: new_text, output: addCategoriesToArray(newData) })
            } catch (error) {
                alert("Error fetching data");
                console.error(error);
                setLoading(false);
            }
        } else {
            alert("Error fetching data");
            setLoading(false);
            return;
        }

    };

    useEffect(() => {
        const trendingMovieNames = [];
        const fetchTrendingMovies = async () => {
            const data = await getTrendingMovies();
            for (const movie of data.results.slice(0, 5)) {
                trendingMovieNames.push(movie.title);
            }
            setTrendingMovies(trendingMovieNames);
        };
        fetchTrendingMovies();
    }, []);

    return (
        <KeyboardAvoidingView>

            <ScrollView style={styles.container} contentContainerStyle={["alignItems", "justifyContent"]}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholderTextColor={primaryColor}
                        label="Enter Prompt"
                        mode="outlined"
                        value={text}
                        onChangeText={handleTextChange}
                        style={styles.input}
                    />
                    <Button
                        loading={loading}
                        mode="contained"
                        onPress={handleButtonPress}
                        style={styles.button}
                    >
                        Recommend
                    </Button>
                </View>
                <View style={styles.movieContainer}>
                    {categoryArray.map((category, i) => (
                        <MoviesListContainer key={i} category={category.category} movies={category.titles} />
                    ))}
                    <MoviesListContainer category="Trending" movies={trendingMovies} />

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: "center",
        // alignItems: 'center',
        padding: 10,
    },
    inputContainer: {
        width: "98%",
        flexDirection: "row", // Display TextInput and IconButton in a row
        alignItems: "center", // Align items vertically in the center
        marginBottom: 20,
    },
    input: {
        flex: 1,
        width: "100%",
        backgroundColor: backgroundColor
    },
    button: {
        backgroundColor: secondaryColor,
        marginLeft: 10,
    },
    movieContainer: {
        width: "100%",
    }
});

export default Home;
