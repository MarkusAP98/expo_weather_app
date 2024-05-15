import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Spring({ children }) {
  return <View style={styles.background}>{children}</View>;
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
  },
});
