import { View } from "react-native";
import React, { useState } from "react";
import { initialState } from "../functions/calculations";

export default function Calculator(props) {
  const [calcState, setCalcState] = useState(initialState);
  console.log("🚀 ~ Calculator ~ calcState:", calcState);

  return (
    <View>
      {React.Children.map(props.children, (child) => {
        if (React.isValidElement(child))
          return React.cloneElement(child, { calcState, setCalcState });
        else return child;
      })}
    </View>
  );
}
