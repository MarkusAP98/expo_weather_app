import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [nameSet, setNameSet] = useState(false);

  useEffect(() => {
    const loadUserData = async () => {
      const savedName = await AsyncStorage.getItem('name');
      const savedLocation = await AsyncStorage.getItem('location');
      if (savedName !== null) {
        setName(savedName);
        setNameSet(true);
      }
      if (savedLocation !== null) setLocation(savedLocation);
    };
    loadUserData();
  }, []);

  const handleNameChange = (newName) => {
    setName(newName);
    AsyncStorage.setItem('name', newName);
    setNameSet(true);
  };

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    AsyncStorage.setItem('location', newLocation);
  };

  const fetchWeatherData = async () => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=35bec7975453a194a19f31a4f6bcba1a`);
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <View style={styles.container}>
      {nameSet ? (
        <Button title="Change Name" onPress={() => setNameSet(false)} />
      ) : (
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={handleNameChange}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Enter your location"
        value={location}
        onChangeText={handleLocationChange}
      />
      <Button title="Get Weather" onPress={fetchWeatherData} />
      {weatherData && (
        <View>
          <Text>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</Text>
          <Text>Weather: {weatherData.weather[0].main}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
    padding: 10,
    width: '80%',
  },
});