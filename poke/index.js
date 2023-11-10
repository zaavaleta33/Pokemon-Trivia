import { AppRegistry } from 'react-native';
import React, {useState, useEffect } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { RNSScreenStackHeaderConfig } from '@react-native-screens';
//import { Accelerometer } from 'react-native-sensors';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center',marginTop: 100 }}>
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

     </View>
  );
}
function TriviaScreen() {

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Text> Press</Text>
    </View>
  );
}

function SuprizeScreen() {
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
   <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
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
}

function LeaderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Text> leaderBoard </Text>
    </View>
  );
}


function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello, my name is</Text>
      <Text>Alexander Zavaleta</Text>
      <Text>I hope to be a software Engenieer in the future</Text>
      <Text>A little about me, I like to create fun little games and projects</Text>
      <Text>I've been coding for about 3-4 years now</Text>
      <Text>and I love solving problems and building Mobil Apps</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="LeaderScreen" component={LeaderScreen} />
        <Stack.Screen name="SuprizeScreen" component={SuprizeScreen} />
        <Stack.Screen name="TriviaScreen" component={TriviaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

AppRegistry.registerComponent('poke', () => App);
