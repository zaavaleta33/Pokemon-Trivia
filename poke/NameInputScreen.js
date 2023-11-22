import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const NameInputScreen = ({ route,navigation }) => {
  const [userName, setUserName] = useState('');
  const { userScore } = route.params;

  const handleContinue = () => {
    if (userName.trim() === '') {
      alert('Please enter your name.');
    } else {
      navigation.navigate('LeaderScreen', { userName, userScore });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Enter Your Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={userName}
        onChangeText={setUserName}
      />
      <Button title="Continue" onPress={handleContinue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7BFB4',
  },
  headerText: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
});

export default NameInputScreen;

