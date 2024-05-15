import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Winter, Spring, Summer, Fall, ChangeBackground } from "./components";

const Drawer = createDrawerNavigator();
function HomeScreen({ navigation }) {
  return (
    <Summer>
      <Text>Home Screen</Text>
    </Summer>
  );
}
// function HomeScreen navigation

export default function App() {
  return (
    <NavigationContainer styles={styles.navigation}>
      <Drawer.Navigator initialRouteName="Home" drawerStyle={{ backgroundColor: 'red' }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Change Background" component={ChangeBackground} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
