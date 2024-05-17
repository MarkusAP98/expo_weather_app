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
import { Winter, Spring, Summer, Fall, UserInput } from "./components";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation, spin, route }) {
  const [name, setName] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const name = await AsyncStorage.getItem("name");
        const city = await AsyncStorage.getItem("city");
        if (name !== null && city !== null) {
          // We have data!!
          setName(name);
          setCity(city);
        }
      } catch (error) {
        // Error retrieving data
      }
    };

    fetchData();
  }, []);
  return (
    <Summer spin={spin}>
      <Text>Home Screen</Text>
      {name && city && (
        <Text style={{ marginBottom: 10 }}>
        Welcome {name} from {city}!
      </Text>
      )}
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
        <Drawer.Screen name="UserInput" component={UserInput} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    color: "#841584",
    textAlign: "center",
  },
  navigation: {
    backgroundColor: "#f5f5f5",
  },
});
