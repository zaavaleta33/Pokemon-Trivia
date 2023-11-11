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
  const [randomPokemon, setRandomPokemon] = useState(null); // Added useState
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
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center',backgroundColor: '#A1C084' }}>
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
}
function TriviaScreen() {

  return (
     <View style={styles.container}>
      <Image
        source={require('/Users/alexanderzavaleta/Desktop/Code/Mob411/Pokemon-Trivia/poke/assets/mew.png')}
        style={styles.imageLeft}
      />
      <Text style={styles.leaderboardText}>Trivia</Text>
      <Image
        source={require('/Users/alexanderzavaleta/Desktop/Code/Mob411/Pokemon-Trivia/poke/assets/mew.png')} 
        style={styles.imageRight}
      />
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
}
function LeaderScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('/Users/alexanderzavaleta/Desktop/Code/Mob411/Pokemon-Trivia/poke/assets/Poke-vin.png')}
        style={styles.imageLeft}
      />
      <Text style={styles.leaderboardText}>Leaderboard</Text>
      <Image
        source={require('/Users/alexanderzavaleta/Desktop/Code/Mob411/Pokemon-Trivia/poke/assets/Poke-vin.png')} 
        style={styles.imageRight}
      />
    </View>
  );
}

/*function LeaderScreen() {
  return (
      <Image
        source={require('/Users/alexanderzavaleta/Desktop/Code/Mob411/Pokemon-Trivia/poke/assets/Poke-vin.png')}
        style={styles.imageLeft}
      />
      <Text style={styles.leaderboardText}>Leaderboard</Text>
      <Image
        source={require('/Users/alexanderzavaleta/Desktop/Code/Mob411/Pokemon-Trivia/poke/assets/Poke-vin.png')} 
        style={styles.imageRight}
      />
    </View>
  );
}*/


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
      <Stack.Navigator initialRouteName="HomeScreen"screenOptions={{
    headerStyle: {
      backgroundColor: '#659157', // Set the background color here
    },
  }}>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A1C084', 
    padding: 16,
  },
 imageLeft: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginHorizontal: 8,
    transform: [{ scaleX: -1 }],

  },
  leaderboardText: {
    fontSize: 30,
    marginHorizontal: 16,
    marginHorizontal: 8,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  }, 
  imageRight: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginHorizontal: 8,
  },});


AppRegistry.registerComponent('poke', () => App);
