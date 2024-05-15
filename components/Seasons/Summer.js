// components/Seasons/Summer.js
import React from "react";
import { View, StyleSheet } from "react-native";

export default function Summer({ children }) {
  return <View style={styles.background}>{children}</View>;
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
});
