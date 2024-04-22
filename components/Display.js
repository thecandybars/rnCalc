import { StyleSheet, Text } from "react-native";
import React from "react";
import { useUserColorScheme } from "./ColorScheme/ColorSchemeProvider";

export default function Display(props) {
  // COLOR
  const displayStyle = [styles.main];
  const { colorScheme } = useUserColorScheme();
  displayStyle.push(colorScheme === "light" ? styles.light : styles.dark);
  //
  const stringValue = props.calcState.currentValue;
  const printDecimal = stringValue[stringValue.length - 1] === "." ? "." : "";
  const displayedValue = parseFloat(stringValue).toLocaleString();
  const displayedString = displayedValue + printDecimal;
  return <Text style={displayStyle}>{displayedString}</Text>;
}

// STYLES
const styles = StyleSheet.create({
  main: {
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
  light: { color: "#333" },
  dark: { color: "#ddd" },
});
