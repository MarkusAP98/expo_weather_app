import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Winter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default Winter

const styles = StyleSheet.create({
    container: {
        backgroundcolor: "white"
    },
  });