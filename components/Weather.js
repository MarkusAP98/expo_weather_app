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
        <View style={styles.container}>
        {weatherData && (
          <View style={styles.weatherContainer}>
            <Text style={styles.temperatureText}>🌡️ {Math.round(weatherData.main.temp - 273.15)}°C</Text>
            <Text style={styles.weatherText}>☁️ {weatherData.weather[0].main}</Text>
            <Text style={styles.descriptionText}>💬 {weatherData.weather[0].description}</Text>
            <Text style={styles.windText}>💨 {weatherData.wind.speed} m/s</Text>
          </View>
        )}
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
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  weatherContainer: {
    marginTop: 20,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  temperatureText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  weatherText: {
    fontSize: 16,
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 16,
    marginTop: 10,
  },
  windText: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Weather;
