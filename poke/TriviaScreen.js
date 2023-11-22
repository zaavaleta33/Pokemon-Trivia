import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const TriviaScreen = ({ navigation }) => {
  const [question, setQuestion] = useState({});
  const [userScore, setUserScore] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  const types = [
    'Normal', 'Fire', 'Water', 'Electric',
    'Grass', 'Ice', 'Fighting', 'Poison',
    'Ground', 'Flying', 'Psychic', 'Bug',
    'Rock', 'Ghost', 'Dragon', 'Dark',
    'Steel', 'Fairy'
  ];

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      const randomPokemonId = Math.floor(Math.random() * 151) + 1;
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`);
      const pokemonData = response.data;
      const questionText = `What is the type of ${pokemonData.name}?`;
      const correctAnswer = pokemonData.types[0].type.name;
      setQuestion({ text: questionText, correctAnswer });
    } catch (error) {
      console.error('Error fetching question:', error);
    }
  };

  const handleAnswer = (userAnswer) => {
    if (userAnswer === question.correctAnswer) {
      setUserScore(userScore + 1);
    } else {
      setWrongAnswer(true); 
      navigation.navigate('NameInputScreen', { userScore });
    }
    fetchQuestion();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {wrongAnswer && (
        <View style={styles.leaderboardContainer}>
        </View>
      )}
      <View style={styles.leaderboardContainer}>
        <Image source={require('/Users/alexanderzavaleta/Desktop/Code/Mob411/Pokemon-Trivia/poke/assets/mew.png')} style={styles.imageLeft} />
        <Text style={styles.leaderboardText}>Leaderboard</Text>
        <Image source={require('/Users/alexanderzavaleta/Desktop/Code/Mob411/Pokemon-Trivia/poke/assets/mew.png')} style={styles.imageRight} />
      </View>
      <Text style={styles.questionText}>{question.text}</Text>
      <View style={styles.buttonContainer}>
        {types.map(type => (
          <Button key={type} title={type} onPress={() => handleAnswer(type.toLowerCase())} />
        ))}
      </View>
      <Text style={styles.scoreText}>Score: {userScore}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F7BFB4',
    paddingTop: 32,
  },
  leaderboardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLeft: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginHorizontal: 8,
    transform: [{ scaleX: -1 }],
  },
  leaderboardText: {
    fontSize: 20,
    marginHorizontal: 16,
    marginHorizontal: 8,
  },
  imageRight: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginHorizontal: 8,
  },
  questionText: {
    fontSize: 18,
    marginVertical: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%',
    paddingHorizontal: 16,
  },
  scoreText: {
    fontSize: 18,
    marginVertical: 16,
  },
});

export default TriviaScreen;

