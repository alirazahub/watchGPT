import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import { backgroundColor } from '../../../colors'

const Favourites = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>History</Text>
            <Button onPress={() => navigation.navigate("Detail")}>
                <Text>Go to Detail</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
    },
});

export default Favourites
