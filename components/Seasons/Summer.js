// components/Seasons/Summer.js
import { Animated, StyleSheet, Text, View } from "react-native";

export default function Summer({ children, spin }) {
  return (
    <View style={styles.background}>
      {children}
      <Animated.Text style={{ ...styles.sun, transform: [{ rotate: spin }] }}>
        ☀️
      </Animated.Text>
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
    backgroundColor: "aqua",
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
