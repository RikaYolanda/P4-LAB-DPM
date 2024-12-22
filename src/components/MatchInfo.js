import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MatchInfo = ({ teamA, teamB }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Match</Text>
      <Text style={styles.team}>🏅 {teamA} vs {teamB} 🏅</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#ffe4e6", // Light pink background
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#d6336c", // Deep pink color
  },
  team: {
    fontSize: 20,
    marginTop: 10,
    color: "#d6336c", // Deep pink color
  },
});

export default MatchInfo;