import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Winter, Spring, Summer, Fall } from "./components/Background";

export default function App() {
  return (
    <Fall>
      <Text>App</Text>
    </Fall>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
  },
});
