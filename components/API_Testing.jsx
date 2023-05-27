import * as React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, IconButton, Button } from "react-native-paper";
import { useEffect } from "react";
import useApiCall from "./utilities/GetDataFromChatGPT";

function API_Testing() {
 
  const [text, setText] = React.useState("IT");
 
 const { fetchData } = useApiCall();

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  const handleIconPress = () => {
    console.log("Icon pressed")
  };

  const handleButtonPress = async () => {
  let new_text = text.trim();
  if (new_text.length > 0) {
    try {
     const newData = await fetchData(new_text);
      console.log(newData); 
     
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
          
          
          placeholder="Enter text here"
          value={text}
          onChangeText={handleTextChange}
          style={styles.input}
        />
        <IconButton
          icon="microphone"
          size={30}
          onPress={handleIconPress}
          color="#694fad"
          style={styles.iconButton}
        />
      </View>
      <Button
        icon="camera"
        mode="contained"
        onPress={handleButtonPress}
      >
        Press me
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    width: "100%",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row", // Display TextInput and IconButton in a row
    alignItems: "center", // Align items vertically in the center
    marginBottom: 20,
  },
  input: {
    flex: 1,
    width: "80%", // Adjust the width of the TextInput
  },
  iconButton: {
    marginLeft: 10, // Adjust the spacing between TextInput and IconButton
  },
});

export default API_Testing;
