import { View } from "react-native";
import React from "react";
import Row from "./Row";
import Button from "./Button";

export default function Keyboard() {
  return (
    <View>
      <Row>
        <Button text="C" theme="secondary"></Button>
        <Button text="±" theme="secondary"></Button>
        <Button text="%" theme="secondary"></Button>
        <Button text="/" theme="accent"></Button>
      </Row>
      <Row>
        <Button text="7"></Button>
        <Button text="8"></Button>
        <Button text="9"></Button>
        <Button text="X" theme="accent"></Button>
      </Row>
      <Row>
        <Button text="4"></Button>
        <Button text="5"></Button>
        <Button text="6"></Button>
        <Button text="-" theme="accent"></Button>
      </Row>
      <Row>
        <Button text="1"></Button>
        <Button text="2"></Button>
        <Button text="3"></Button>
        <Button text="+" theme="accent"></Button>
      </Row>
      <Row>
        <Button text="0" />
        <Button text="." />
        <Button text="=" theme="accent" size="double" />
      </Row>
    </View>
  );
}
