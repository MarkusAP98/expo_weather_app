import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function UserInput({ navigation }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!name || !city) {
      setError("Both Name and City are required!");
      return;
    }
    try {
      await AsyncStorage.setItem("name", name);
      await AsyncStorage.setItem("city", city);
      navigation.navigate("Home", { name, city });
      setSubmitted(true);
    } catch (error) {
      setError("There was an error saving your data!");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {error && <Text style={styles.text}>{error}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setName(text);
          setSubmitted(false);
          setError(null);
        }}
        defaultValue={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your city"
        onChangeText={(text) => {
          setCity(text);
          setSubmitted(false);
          setError(null);
        }}
        defaultValue={city}
      />
      <Button onPress={handleSubmit} title="Submit" color="#841584" />
      {submitted && name && city && (
        <View>
          <Text style={styles.text}>Hello there, {name}!</Text>
          <Text style={styles.text}> You live in {city}.</Text>
        </View>
      )}
      {submitted && (
        <View>
          <Text style={styles.text}>
            Your data has been saved successfully!
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  input: {
    height: 50,
    borderColor: "#841584",
    borderWidth: 2,
    marginBottom: 20,
    paddingLeft: 15,
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: "#fff",
  },
  text: {
    marginTop: 0,
    fontSize: 18,
    color: "#841584",
    textAlign: "center",
  },
});

export default UserInput;
