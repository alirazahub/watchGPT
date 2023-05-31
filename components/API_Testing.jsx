import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { TextInput, IconButton, Button } from "react-native-paper";
import useApiCall from "./utilities/GetDataFromChatGPT";
import MoviesContext from "../contexts/MoviesContext";
import MoviesListContainer from "./MoviesListContainer";

function API_Testing() {

  const [text, setText] = React.useState("");
  const [loading, setLoading] = useState(false);
  const { movies, setMovies } = useContext(MoviesContext);

  const { fetchData } = useApiCall();

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  const handleIconPress = () => {
    console.log("Icon pressed")
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
        console.error(error);
      }
    } else {
      return;
    }

  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="Enter Prompt"
          mode="outlined"
          value={text}
          onChangeText={handleTextChange}
          style={styles.input}
        />
      </View>
      <IconButton
        icon="microphone"
        size={30}
        onPress={handleIconPress}
        color="#694fad"
        style={styles.iconButton}
      />
      <Button
        loading={loading}
        mode="contained"
        onPress={handleButtonPress}
      >
        Press me
      </Button>
      <MoviesListContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 50,
    width: "100%",
    backgroundColor: "#2a2a2a",
  },
  inputContainer: {
    width: "50%",
    flexDirection: "row", // Display TextInput and IconButton in a row
    alignItems: "center", // Align items vertically in the center
    marginBottom: 20,
  },
  input: {
    flex: 1,
    width: "100%", // Adjust the width of the TextInput
    padding: 10,
  },
  iconButton: {
    marginLeft: 10, // Adjust the spacing between TextInput and IconButton
  },
});

export default API_Testing;
