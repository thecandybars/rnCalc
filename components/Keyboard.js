import { View } from "react-native";
import React from "react";
import Row from "./Row";
import Button from "./Button";
import calculations from "../functions/calculations";

export default function Keyboard(props) {
  // Handle Press
  const handleKeyPress = (type, value) => {
    props.setCalcState(calculations(type, value, props.calcState));
  };
  return (
    <View>
      <Row>
        <Button
          text="C"
          theme="secondary"
          onPress={() => handleKeyPress("clear")}
        ></Button>
        <Button
          text="±"
          theme="secondary"
          onPress={() => handleKeyPress("posneg")}
        ></Button>
        <Button
          text="%"
          theme="secondary"
          onPress={() => handleKeyPress("percent")}
        ></Button>
        <Button
          text="/"
          theme="accent"
          onPress={() => handleKeyPress("operator", "/")}
        ></Button>
      </Row>
      <Row>
        <Button text="7" onPress={() => handleKeyPress("number", 7)}></Button>
        <Button text="8" onPress={() => handleKeyPress("number", 8)}></Button>
        <Button text="9" onPress={() => handleKeyPress("number", 9)}></Button>
        <Button
          text="X"
          theme="accent"
          onPress={() => handleKeyPress("operator", "*")}
        ></Button>
      </Row>
      <Row>
        <Button text="4" onPress={() => handleKeyPress("number", 4)}></Button>
        <Button text="5" onPress={() => handleKeyPress("number", 5)}></Button>
        <Button text="6" onPress={() => handleKeyPress("number", 6)}></Button>
        <Button
          text="-"
          theme="accent"
          onPress={() => handleKeyPress("operator", "-")}
        ></Button>
      </Row>
      <Row>
        <Button text="1" onPress={() => handleKeyPress("number", 1)}></Button>
        <Button text="2" onPress={() => handleKeyPress("number", 2)}></Button>
        <Button text="3" onPress={() => handleKeyPress("number", 3)}></Button>
        <Button
          text="+"
          theme="accent"
          onPress={() => handleKeyPress("operator", "+")}
        ></Button>
      </Row>
      <Row>
        <Button text="0" onPress={() => handleKeyPress("number", 0)} />
        <Button text="." onPress={() => handleKeyPress("point", ".")} />
        <Button
          text="="
          theme="accent"
          size="double"
          onPress={() => handleKeyPress("equal", "=")}
        />
      </Row>
    </View>
  );
}
