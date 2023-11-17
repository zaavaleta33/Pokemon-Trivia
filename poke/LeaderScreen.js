import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LeaderScreen = () => {
    return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#A1C084', paddingTop: 32 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
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

export default LeaderScreen;

