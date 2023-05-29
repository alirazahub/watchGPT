import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, FlatList, KeyboardAvoidingView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import useApiCall from "../../utilities/GetDataFromChatGPT";
import MoviesContext from "../../../contexts/MoviesContext";
import MoviesListContainer from "../../MoviesListContainer";
import { primaryColor, secondaryColor,backgroundColor } from '../../../colors'

function Home({ navigation }) {

    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);
    const { movies, setMovies } = useContext(MoviesContext);

    const { fetchData } = useApiCall();

    const handleTextChange = (inputText) => {
        setText(inputText);
    };


    function addNamesToArray(namesString) {
        const namesArray = namesString.split(',').map(name => name.trim());
        return namesArray;
    }

    const handleButtonPress = async () => {
        setLoading(true);
        let new_text = text.trim();
        if (new_text.length > 0) {
            try {
                const newData = await fetchData(new_text);
                setMovies(addNamesToArray(newData));
                setLoading(false);
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

    return (
        <KeyboardAvoidingView>

            <View style={styles.container}>
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
                    <MoviesListContainer />
                </View>
            <Button onPress={() => navigation.navigate("Detail")}>
                <Text>Go to Detail</Text>
            </Button>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center',
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
        backgroundColor:backgroundColor
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
