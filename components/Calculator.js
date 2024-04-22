import { View, useColorScheme } from "react-native";
import React, { useState } from "react";
import { initialState } from "../functions/calculations";

export default function Calculator(props) {
  // CALCULATOR STATE
  const [calcState, setCalcState] = useState(initialState);
  // COLOR SCHEME STATE
  const userColorScheme = useColorScheme();
  const [isColorSchemeDark, setIsColorSchemeDark] = useState(
    userColorScheme === "dark"
  );
  return (
    <View>
      {React.Children.map(props.children, (child) => {
        if (React.isValidElement(child))
          return React.cloneElement(child, {
            calcState,
            setCalcState,
            isColorSchemeDark,
            setIsColorSchemeDark,
          });
        else return child;
      })}
    </View>
  );
}
