import { Switch } from "react-native";
import React, { useState } from "react";
import { useUserColorScheme } from "./ColorSchemeProvider";

export default function ColorSchemeSwitch(props) {
  const { colorScheme, setColorScheme } = useUserColorScheme();
  const handleSwitch = () => {
    setColorScheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <Switch
      onValueChange={() => handleSwitch()}
      value={colorScheme === "dark"}
    />
  );
}
