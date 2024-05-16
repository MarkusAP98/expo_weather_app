import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

function UserInput() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        onChangeText={(text) => setName(text)}
        defaultValue={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your city"
        onChangeText={(text) => setCity(text)}
        defaultValue={city}
      />
      <Button onPress={handleSubmit} title="Submit" color="#841584" />
      {submitted && name && city && (
        <View>
          <Text style={styles.text}>Hello there, {name}!</Text>
          <Text style={styles.text}> You live in {city}.</Text>
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
    marginTop: 20,
    fontSize: 18,
    color: "#841584",
    textAlign: "center",
  },
});

export default UserInput;
