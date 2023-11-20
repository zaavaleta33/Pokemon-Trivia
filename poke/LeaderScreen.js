import React , { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Button, TouchableOpacity, AsyncStorage} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LeaderScreen = ({ route }) => {
  const { userName = 'DefaultUser', userScore } = route.params || {};
  const navigation = useNavigation();
  const [leaderboardData, setLeaderboardData] = useState([]);
  const goToHomeScreen = () => {
    navigation.navigate('HomeScreen'); 
  };

  const saveScore = async () => {
    try {
      // Retrieve existing scores from AsyncStorage
      const existingScores = await AsyncStorage.getItem('scores');
      const scoresArray = existingScores ? JSON.parse(existingScores) : [];

      // Find the user's existing entry in the scores array
      const userEntryIndex = scoresArray.findIndex(entry => entry.userName === userName);

      if (userEntryIndex !== -1) {
        // If the user already exists, append the new score to the existing scores array
        scoresArray[userEntryIndex].userScores.push(userScores);
      } else {
        // If the user is playing for the first time, create a new entry
        scoresArray.push({ userName, userScores: [userScores] });
      }

      // Save the updated scores array back to AsyncStorage
      await AsyncStorage.setItem('scores', JSON.stringify(scoresArray));

      // Update the leaderboard data state
      setLeaderboardData(scoresArray);
    } catch (error) {
      console.error('Error saving score:', error);
    }
  }; 

  return (
   <View style={styles.container}>
      <View style={styles.headerContainer}>
         <Image
          source={require('/Users/alexanderzavaleta/Desktop/Code/Mob411/Pokemon-Trivia/poke/assets/Poke-vin.png')}
          style={styles.imageRight}
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
      
      {/* Display the leaderboard using FlatList */}
      <FlatList
  data={leaderboardData}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <View style={styles.nameContainer}>
      {/* Use item.userScores instead of item.userScore */}
      <Text style={styles.nameText}>{item.userName}: {item.userScores.join(', ')}</Text>
    </View>
  )}
/>


      <TouchableOpacity onPress={goToHomeScreen}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Go to Home Screen</Text>
        </View>
      </TouchableOpacity>
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
    backgroundColor: '#yourTopColor', 
    height: 50,
    alignSelf: 'stretch',
    marginVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userText: {
    fontSize: 18,
    color: 'white', 
  },
  nameContainer: {
    backgroundColor: '#yourBottomColor', 
    height: 50,
    alignSelf: 'stretch',
    marginVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 18,
    color: 'white', 
  },
  buttonContainer: {
    backgroundColor: '#yourButtonColor', 
    height: 50,
    alignSelf: 'stretch',
    marginVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white', 
  },
});

export default LeaderScreen;

