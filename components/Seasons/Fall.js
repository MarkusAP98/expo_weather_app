import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Fall({ children }) {
  return <View style={styles.background}>{children}</View>;
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
});
