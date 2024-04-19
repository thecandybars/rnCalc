import { StyleSheet, Text } from "react-native";
import React from "react";

export default function Display() {
  return (
    <Text style={styles.value}>
      {parseFloat(-1234567890.12).toLocaleString()}
    </Text>
  );
}

// STYLES
const styles = StyleSheet.create({
  value: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
