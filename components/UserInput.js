import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

function UserInput() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = () => {
    // Store the name and city for later use
    // This is just a console log, but you can replace this with your own logic
    console.log(`Name: ${name}, City: ${city}`);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your name"
        onChangeText={text => setName(text)}
        defaultValue={name}
      />
      <TextInput
        placeholder="Enter your city"
        onChangeText={text => setCity(text)}
        defaultValue={city}
      />
      <Button
        onPress={handleSubmit}
        title="Submit"
      />
    </View>
  );
}

export default UserInput;