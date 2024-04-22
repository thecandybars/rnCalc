import { View, Text, useColorScheme } from "react-native";
import React, { createContext, useContext, useState } from "react";

const ColorSchemeContext = createContext();
export default function ColorSchemeProvider(props) {
  // COLOR SCHEME STATE
  const userColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(userColorScheme);
  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {props.children}
    </ColorSchemeContext.Provider>
  );
}

export function useUserColorScheme() {
  const userColorScheme = useContext(ColorSchemeContext);
  if (!userColorScheme)
    throw new Error(
      "useUserColorScheme must be used within <ColorSchemeContext> tag"
    );
  return userColorScheme;
}
