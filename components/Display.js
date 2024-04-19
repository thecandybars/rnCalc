import { StyleSheet, Text } from "react-native";
import React from "react";

export default function Display(props) {
  const stringValue = props.calcState.currentValue;
  const printDecimal = stringValue[stringValue.length - 1] === "." ? "." : "";
  const displayedValue = parseFloat(stringValue).toLocaleString();
  const displayedString = displayedValue + printDecimal;
  return <Text style={styles.value}>{displayedString}</Text>;
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
