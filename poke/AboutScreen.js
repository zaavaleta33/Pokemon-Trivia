import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutScreen = () => {
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#DB93B0'  }}>
      <Text>Hello, my name is</Text>
      <Text>Alexander Zavaleta</Text>
      <Image
        source={require('/Users/alexanderzavaleta/Desktop/Code/Mob411/Pokemon-Trivia/poke/assets/cram.png')}
        style={styles.imagecram}
      />
      <Text>I hope to be a software Engenieer in the future</Text>
      <Text>A little about me, I like to create fun little games and projects</Text>
      <Text>I've been coding for about 3-4 years now</Text>
      <Text>and I love solving problems and building Mobil Apps</Text>
      <Text>Excel sheet: https://docs.google.com/spreadsheets/d/1Sd1ymp9HTYJQKFcvzQmLoLeD_aLkb4EqfaDPFTgCG38/edit?usp=sharing </Text>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7BFB4', 
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

export default AboutScreen;

