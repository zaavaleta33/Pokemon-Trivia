import React , { useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LeaderScreen = ({ route }) => {
  const { userName, userScore } = route.params || {};
  const navigation = useNavigation();
  const [leaderboardData, setLeaderboardData] = useState([]);
  const goToHomeScreen = () => {
    navigation.navigate('HomeScreen'); 
  };

  useEffect(() => {
  //clearAsyncStorage()
  saveScore();
  loadScores();
  }, [userScore]);

  const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('AsyncStorage cleared successfully.');
  } catch (error) {
    console.error('Error clearing AsyncStorage:', error);
  }
};


  const loadScores = async () => {
  try {
    const existingScores = await AsyncStorage.getItem('scores');
    let scoresArray = existingScores ? JSON.parse(existingScores) : [];

    scoresArray = scoresArray.filter((entry) => Math.max(...entry.userScores) > 0);

    scoresArray.sort((a, b) => Math.max(...b.userScores) - Math.max(...a.userScores));

    setLeaderboardData(scoresArray);
  } catch (error) {
    console.error('Error loading scores:', error);
  }
};

const saveScore = async () => {
  try {
    const existingScores = await AsyncStorage.getItem('scores');
    const scoresArray = existingScores ? JSON.parse(existingScores) : [];

    const userEntryIndex = scoresArray.findIndex((entry) => entry.userName === userName);
    if(userScore > 0 || userName == "DefaultUser"){
      if (userEntryIndex !== -1) {
        const currentHighestScore = Math.max(...scoresArray[userEntryIndex].userScores);

        if (userScore > currentHighestScore) {
          scoresArray[userEntryIndex].userScores = [userScore];
        }
      } else {
        scoresArray.push({ userName, userScores: [userScore] });
      }
    }

    scoresArray.sort((a, b) => Math.max(...b.userScores) - Math.max(...a.userScores));

    await AsyncStorage.setItem('scores', JSON.stringify(scoresArray));

    setLeaderboardData(scoresArray);
  } catch (error) {
    console.error('Error saving score:', error);
  }
};

  return (
   <View style={styles.container}>
      <ScrollView style={{ flex: 1, width: '100%' }}>
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
      
      {}
      <FlatList
  data={leaderboardData}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <View style={styles.nameContainer}>
      <Text style={styles.nameText}>{item.userName}: {item.userScores.join(', ')}</Text>
    </View>
  )}
/>
      <TouchableOpacity onPress={goToHomeScreen}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Go to Home Screen</Text>
        </View>
      </TouchableOpacity>
      </ScrollView>
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
    backgroundColor: '#A1C084', 
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
    backgroundColor: '#A1C084', 
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
    backgroundColor: '#A1C084', 
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

