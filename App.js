import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Winter, Spring, Summer, Fall, Weather } from "./components";

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation, spin }) {
  return (
    <Summer spin={spin}>
      <Text>Home Screen</Text>
      <Weather />
    </Summer>
  );
}

export default function App() {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ["0deg", "360deg", "0deg"],
  });
  return (
    <NavigationContainer styles={styles.navigation}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home">
          {(props) => <HomeScreen {...props} spin={spin} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
