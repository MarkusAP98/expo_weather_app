// components/Seasons/Summer.js
import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Summer({ children }) {
  return (
    <View style={styles.background}>
      {children}
      <Text style={styles.sun}>☀️</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  sun: {
    position: "absolute",
    top: 10,
    right: 10,
    fontSize: 60,
  },
});
