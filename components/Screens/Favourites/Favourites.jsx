import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

const Favourites = ({ navigation }) => {
    return (
        <View>
            <Text>Favourite Movies</Text>
            <Button onPress={() => navigation.navigate("Detail")}>
                <Text>Go to Detail</Text>
            </Button>
        </View>
    )
}

export default Favourites
