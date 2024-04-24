import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useUserColorScheme } from "../ColorScheme/ColorSchemeProvider";
import { palette } from "../Theme/theme";

export default function MainView(props) {
  const { colorScheme } = useUserColorScheme();
  const containerStyle = [styles.container];
  if (colorScheme === "light") containerStyle.push(styles.lightScheme);
  else containerStyle.push(styles.darkScheme);

  return <View style={containerStyle}>{props.children}</View>;
}

// STYLES
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "flex-end",
  },
  darkScheme: {
    backgroundColor: palette.background.dark,
  },
  lightScheme: { backgroundColor: palette.background.light },
});
