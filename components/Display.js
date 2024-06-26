import { StyleSheet, Text } from "react-native";
import React from "react";
import { useUserColorScheme } from "./ColorScheme/ColorSchemeProvider";
import { palette } from "./Theme/theme";

export default function Display(props) {
  // COLOR
  const displayStyle = [styles.main];
  const { colorScheme } = useUserColorScheme();
  displayStyle.push(colorScheme === "light" ? styles.light : styles.dark);
  //
  const stringValue = props.calcState.display;
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
  light: { color: palette.text.light },
  dark: { color: palette.text.dark },
});
