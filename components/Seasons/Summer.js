// components/Seasons/Summer.js
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function Summer({ children, spin }) {
  const cloudAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(cloudAnim, {
          toValue: 1,
          duration: 15000,
          useNativeDriver: true,
        }),
        Animated.timing(cloudAnim, {
          toValue: 0,
          duration: 10000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const cloudTranslate = cloudAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-20, 100], // adjust these values as needed
  });
  return (
    <View style={styles.background}>
      {children}
      <Animated.Text style={{ ...styles.sun, transform: [{ rotate: spin }] }}>
        ☀️
      </Animated.Text>
      <Animated.Text
        style={{ ...styles.cloud, transform: [{ translateX: cloudTranslate }] }}
      >
        ☁️
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
  cloud: {
    position: "absolute",
    top: 60,
    right: 50,
    fontSize: 60,
  },
});
