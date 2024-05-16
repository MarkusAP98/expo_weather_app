import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Weather = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStoredCity = async () => {
      const storedCity = await AsyncStorage.getItem("city");
      if (storedCity) {
        setCityName(storedCity);
        fetchWeather(storedCity);
      }
    };

    fetchStoredCity();
  }, []);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=35bec7975453a194a19f31a4f6bcba1a`
      );
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.log("Error:", error);
      setLoading(false);
    }
  };

  const handleCityInputSubmit = async () => {
    await AsyncStorage.setItem("city", cityName);
    fetchWeather(cityName);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={cityName}
        onChangeText={setCityName}
        onSubmitEditing={handleCityInputSubmit}
      />
      <Button
        title={loading ? "⏳ Loading..." : "Get Weather"}
        onPress={handleCityInputSubmit}
        disabled={loading}
      />
      {weatherData && (
        <View>
          <Text>🌡️ {Math.round(weatherData.main.temp - 273.15)}°C</Text>
          <Text>☁️ {weatherData.weather[0].main}</Text>
          <Text>💬 {weatherData.weather[0].description}</Text>
          <Text>💨 {weatherData.wind.speed} m/s</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
  },
});

export default Weather;
