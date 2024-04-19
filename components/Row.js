import { View, StyleSheet } from "react-native";
import React from "react";

export default function Row({ children }) {
  return <View style={styles.container}>{children}</View>;
}

// STYLES
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
