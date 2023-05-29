import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { backgroundColor } from '../../colors'

const History = () => {
  return (
    <View style={styles.container}>
        <Text>History</Text>
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
export default History
