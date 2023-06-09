import React, { useState, useContext, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import { backgroundColor, secondaryColor } from '../../../colors'
import SearchContext from '../../../contexts/SearchContext'
import MoviesListContainer from '../../MoviesListContainer'
import { getSearchHistory } from '../../../customHooks/useSearchHistory'
import UserAuthContext from '../../../contexts/UserAuthContext'
import { useIsFocused } from '@react-navigation/native';

const History = () => {
    const {user} = useContext(UserAuthContext);
const {searchHistory, setSearchHistory} = useContext(SearchContext);
const isFocused = useIsFocused();

  useEffect(() => {
    getSearchHistory(user.uid).then((history) => {
        setSearchHistory(history);
    })

}, [isFocused])

    

    return (
        <ScrollView contentContainerStyle={["alignItems", "justifyContent"]}>
            <Text style={{ color: secondaryColor, fontSize: 26, fontWeight: "bold", marginLeft: 10 }}>History</Text>
            <View style={styles.movieContainer} >
                {searchHistory.map((search, i) => (
                    <MoviesListContainer key={i} category={"Showing results for: " + search.prompt} movies={search.output[0].titles} />
                )).reverse().slice(0, 5)}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },

    movieContainer: {
        width: "100%",
        marginBottom: 60,
    },
});
export default History
