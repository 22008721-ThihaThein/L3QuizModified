import React, { useState } from 'react';
import { View, Button, Alert, StyleSheet, ScrollView, Image, Text } from 'react-native';
import AllQuestions from './AllQuestions';

const App = () => {
  const [answers, setAnswers] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
    question6: null,
    question7: null,
    question8: null,
    question9: null,
    question10: null,
  });

  const correctAnswers = {
    question1: 'Leopard',
    question2: 'Kingfisher',
    question3: 'Hummingbird',
    question4: 'Elephant',
    question5: 'Deer',
    question6: 'Charmander',
    question7: 'Bulbasaur',
    question8: 'Metapod',
    question9: 'Squirtle',
    question10: 'Pidgey',
  };

  const handleSubmit = () => {
    let correctCount = 0;

    Object.keys(correctAnswers).forEach((key) => {
      if (answers[key] === correctAnswers[key]) {
        correctCount++;
      }
    });

    let feedbackMessage = '';

    if (correctCount <= 3) {
      feedbackMessage = "You can do better next time.";
    } else if (correctCount <= 6) {
      feedbackMessage = "Good effort!";
    } else if (correctCount <= 9) {
      feedbackMessage = "Well done!";
    } else if (correctCount === 10) {
      feedbackMessage = "Perfect score!";
    }

    Alert.alert("Quiz Result", `You have ${correctCount} correct answer${correctCount !== 1 ? 's' : ''}!\n\n${feedbackMessage}`);
  };

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleContainer}>
          <Image source={require('./img/quizicon.jpg')} style={styles.icon} />
          <Text style={styles.titleText}>10 Questions Quiz</Text>
        </View>

        <AllQuestions setAnswers={setAnswers} answers={answers} />

        <View style={styles.buttonContainer}>
          <Button title="Submit Answers" onPress={handleSubmit} color="#4CAF50" />
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f0f8ff',
    flexGrow: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginTop: 20
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 40,
    alignSelf: 'center',
    width: '60%',
  },
});

export default App;
