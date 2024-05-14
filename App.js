import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Background from './components/Background';

export default function App() {

  return (
    <View style={styles.container}>
      <Background>
        <Text>App Background</Text>
      </Background>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});