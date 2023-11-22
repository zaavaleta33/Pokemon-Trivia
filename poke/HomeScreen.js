import React, { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [randomPokemon, setRandomPokemon] = useState(null);

  useEffect(() => {
    const getRandomPokemon = async () => {
      try {
        const randomPokemonId = Math.floor(Math.random() * 898) + 1; // There are 898 Pokémon in total
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
        const pokemonData = response.data;

        setRandomPokemon({
          name: pokemonData.name,
          imageUrl: pokemonData.sprites.front_default,
        });
      } catch (error) {
        console.error('Error fetching random Pokemon:', error);
      }
    };

    getRandomPokemon();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#F7BFB4' }}>
      <Button
        title="TriviaBoard"
        onPress={() => navigation.navigate('TriviaScreen')}
        style={{ marginBottom: 40 }}
      />
      <Button
        title="ScoreBoard"
        onPress={() => navigation.navigate('LeaderScreen')}
        style={{ marginBottom: 40 }}
      />
      <Button
        title="SuprizeBoard"
        onPress={() => navigation.navigate('SuprizeScreen')}
        style={{ marginBottom: 40 }}
      />
      <Button
        title="About Page"
        onPress={() => navigation.navigate('AboutScreen')}
        style={{ marginBottom: 40 }}
      />
      {randomPokemon && (
        <View>
          <Image source={{ uri: randomPokemon.imageUrl }} style={styles.image} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

export default HomeScreen;

