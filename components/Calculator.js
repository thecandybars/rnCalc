import { View, useColorScheme } from "react-native";
import React, { useState } from "react";
import { initialState } from "../functions/calculations";
import Display from "./Display";
import Keyboard from "./Keyboard";

export default function Calculator(props) {
  // CALCULATOR STATE
  const [calcState, setCalcState] = useState(initialState);
  console.log("🚀 ~ Calculator ~ calcState:", calcState);

  return (
    <View>
      <Display calcState={calcState} />
      <Keyboard calcState={calcState} setCalcState={setCalcState} />
    </View>
  );
}
