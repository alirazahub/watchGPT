import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { backgroundColor } from '../../../colors'

const Detail = () => {
  return (
    <View style={styles.container}>
      <Text>This is Detailed Page of the Movie</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Detail
