import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const TriviaScreen = ({ navigation }) => {
    const [question, setQuestion] = useState({});
  const [userScore, setUserScore] = useState(0);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async (callback) => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/1/');
        const pokemonData = response.data;
        const questionText = `What is the type of ${pokemonData.name}?`;
        const correctAnswer = pokemonData.types[0].type.name;
        setQuestion({ text: questionText, correctAnswer });
        if (callback) {
          callback(correctAnswer);
        }
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    };
  const handleAnswer = (userAnswer) => {
    if (userAnswer === question.correctAnswer) {
      setUserScore(userScore + 1);
      fetchQuestion();
    } else {
      navigation.navigate('LeaderScreen', { score: userScore });
    }
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#A1C084', paddingTop: 32 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('/Users/alexanderzavaleta/Desktop/Code/Mob411/Pokemon-Trivia/poke/assets/mew.png')} />
        <Text style={styles.leaderboardText}>Leaderboard</Text>
        <Image source={require('/Users/alexanderzavaleta/Desktop/Code/Mob411/Pokemon-Trivia/poke/assets/mew.png')} />
      </View>
      <Text>{question.text}</Text>
      <Button title="Fire" onPress={() => handleAnswer('fire')} />
      <Button title="Water" onPress={() => handleAnswer('water')} />
      <Button title="Grass" onPress={() => handleAnswer('grass')} />
      <View style={{ backgroundColor: '#yourBottomColor', height: 50, alignSelf: 'stretch' }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A1C084', 
    padding: 16,
  },
 imageLeft: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginHorizontal: 8,
    transform: [{ scaleX: -1 }],

  },
  leaderboardText: {
    fontSize: 20,
    marginHorizontal: 16,
    marginHorizontal: 8,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  }, 
  imagecram: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  imageRight: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginHorizontal: 8,
  },});

export default TriviaScreen;

