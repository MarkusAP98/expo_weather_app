import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Winter({ children }) {
  return <View style={styles.background}>{children}</View>;
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
