import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const ScoreControls = ({ team, score, onIncrement, onDecrement }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teamName}>Team {team}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.incrementButton]}
          onPress={() => onIncrement(team)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.decrementButton]}
          onPress={() => onDecrement(team)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#ffe4e6", // Light pink background
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  teamName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#d6336c", // Deep pink color
    marginBottom: 10,
  },
  score: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#d6336c", // Deep pink color
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 120,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  incrementButton: {
    backgroundColor: "#ff6f91", // Soft pink color
  },
  decrementButton: {
    backgroundColor: "#ffb3c1", // Light pink color
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff", // White text color
  },
});

export default ScoreControls;
