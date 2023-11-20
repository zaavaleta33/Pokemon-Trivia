import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const LeaderScreen = ({ route }) => {
  const { userName, userScore } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
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
      <View style={styles.userContainer}>
        <Text style={styles.userText}>{userName}'s Score: {userScore}</Text>
      </View>
      
      <FlatList
        data={userName}
        keyExtractor={(userScore, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.nameContainer}>
          </View>
        )}
/>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#A1C084',
    paddingTop: 32,
  },
  headerContainer: {
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
  userContainer: {
    backgroundColor: '#yourTopColor', // Replace with your desired color
    height: 50,
    alignSelf: 'stretch',
    marginVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userText: {
    fontSize: 18,
    color: 'white', // Replace with your desired text color
  },
  nameContainer: {
    backgroundColor: '#yourBottomColor', // Replace with your desired color
    height: 50,
    alignSelf: 'stretch',
    marginVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18,
    color: 'white', // Replace with your desired text color
  },
});

export default LeaderScreen;

