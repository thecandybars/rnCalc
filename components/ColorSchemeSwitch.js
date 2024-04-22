import { Switch } from "react-native";
import React, { useState } from "react";

export default function ColorSchemeSwitch(props) {
  const handleSwitch = () => {
    props.setIsColorSchemeDark((prev) => !prev);
  };
  return (
    <Switch
      onValueChange={() => handleSwitch()}
      value={props.isColorSchemeDark}
    />
  );
}
