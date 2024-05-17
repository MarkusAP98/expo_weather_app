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
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { Winter, Spring, Summer, Fall, UserInput } from "./components";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation, spin, route }) {
  const [name, setName] = useState(null);
  const [city, setCity] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const storedName = await AsyncStorage.getItem("name");
          const storedCity = await AsyncStorage.getItem("city");
          if (storedName !== null && storedCity !== null) {
            setName(storedName);
            setCity(storedCity);
          }
        } catch (error) {
          // Error retrieving data
        }
      };

      fetchData();
    }, [route.params])
  );
  return (
    <Summer spin={spin}>
      {name && city && (
        <Text
          style={{
            color: "white",
            fontSize: 20,
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
            textAlign: "center",
            fontWeight: 700,
            position: "absolute",
            top: 50,
            left: 5,
            transform: [{ rotate: "-15deg" }],
          }}
        >
          {" "}
          Hi There {name}👋 {city}
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
  navigation: {
    backgroundColor: "#f5f5f5",
  },
});
