import React, { useState } from 'react';
import { View, Button, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const SuprizeScreen = () => {
  const [pokemonData, setPokemonData] = useState(null);


const getRandomPokemon = () => {
    // Array of Pokemon names for random selection
   const pokemonNames = [
  'bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard',
  'squirtle', 'wartortle', 'blastoise', 'caterpie', 'metapod', 'butterfree',
  'weedle', 'kakuna', 'beedrill', 'pidgey', 'pidgeotto', 'pidgeot',
  'rattata', 'raticate', 'spearow', 'fearow', 'ekans', 'arbok',
  'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran♀', 'nidorina',
  'nidoqueen', 'nidoran♂', 'nidorino', 'nidoking', 'clefairy', 'clefable',
  'vulpix', 'ninetales', 'jigglypuff', 'wigglytuff', 'zubat', 'golbat',
  'oddish', 'gloom', 'vileplume', 'paras', 'parasect', 'venonat',
  'venomoth', 'diglett', 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck',
  'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl',
  'poliwrath', 'abra', 'kadabra', 'alakazam', 'machop', 'machoke', 'machamp',
  'bellsprout', 'weepinbell', 'victreebel', 'tentacool', 'tentacruel',
  'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro',
  'magnemite', 'magneton', 'farfetched', 'doduo', 'dodrio', 'seel', 'dewgong',
  'grimer', 'muk', 'shellder', 'cloyster', 'gastly', 'haunter', 'gengar',
  'onix', 'drowzee', 'hypno', 'krabby', 'kingler', 'voltorb', 'electrode',
  'exeggcute', 'exeggutor', 'cubone', 'marowak', 'hitmonlee', 'hitmonchan',
  'lickitung', 'koffing', 'weezing', 'rhyhorn', 'rhydon', 'chansey', 'tangela',
  'kangaskhan', 'horsea', 'seadra', 'goldeen', 'seaking', 'staryu', 'starmie',
  'mr-mime', 'scyther', 'jynx', 'electabuzz', 'magmar', 'pinsir', 'tauros',
  'magikarp', 'gyarados', 'lapras', 'ditto', 'eevee', 'vaporeon', 'jolteon',
  'flareon', 'porygon', 'omanyte', 'omastar', 'kabuto', 'kabutops', 'aerodactyl',
  'snorlax', 'articuno', 'zapdos', 'moltres', 'dratini', 'dragonair', 'dragonite',
  'mewtwo', 'mew',
];
 
    // Randomly select a Pokemon name from the array
    const randomPokemonName = pokemonNames[Math.floor(Math.random() * pokemonNames.length)];

    // Fetch data for the randomly selected Pokemon
    getPokemonData(randomPokemonName);
  };
  const getPokemonData = async (pokemonName) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = response.data;
      setPokemonData(data);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };

  const handleShake = () => {
    // Replace 'pikachu' with the desired Pokemon name
    getRandomPokemon();
  };

  return (
   <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor:'#A1C084' }}>
      <Button title="Press for suprize" onPress={getRandomPokemon} />
      {pokemonData && (
        <View>
          <Text>Pokemon Name: {pokemonData.name}</Text>
          <Text>Height: {pokemonData.height}</Text>
          <Text>Weight: {pokemonData.weight}</Text>
          <Text>Types: {pokemonData.types.map(type => type.type.name).join(', ')}</Text>
          <Image
            style={styles.image}
            source={{ uri: pokemonData.sprites.front_default }}
          />
          {/* Add more details as needed */}
        </View>
      )}
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

export default SuprizeScreen;

