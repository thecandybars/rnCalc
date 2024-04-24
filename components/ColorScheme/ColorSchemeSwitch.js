import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useUserColorScheme } from "./ColorSchemeProvider";
import { colors } from "../Theme/theme";

export default function ColorSchemeSwitch(props) {
  const { colorScheme, setColorScheme } = useUserColorScheme();
  // STYLES
  const labelStyle = [styles.label];
  if (colorScheme === "light") labelStyle.push(styles.light);
  else labelStyle.push(styles.dark);
  // HANDLERS
  const handleSwitch = () => {
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <View style={styles.container}>
      <Text style={labelStyle}>
        {colorScheme === "light" ? "Light" : "Dark"}
      </Text>
      <Switch
        onValueChange={() => handleSwitch()}
        value={colorScheme === "dark"}
        style={styles.switch}
        trackColor={{ false: colors.gray, true: colors.lightGray }}
        thumbColor={colorScheme === "light" ? colors.orange : colors.lightBlue}
      />
    </View>
  );
}

// STYLES
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
  light: { color: "#333" },
  dark: { color: "#ddd" },
});
