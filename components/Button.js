import { StyleSheet, Dimensions, Text, TouchableOpacity } from "react-native";
import { palette } from "./Theme/theme";

Button.defaultProps = {
  colorScheme: "dark",
  highlighted: false,
};
export default function Button(props) {
  const { onPress, text, theme, size, customStyles, highlighted } = props;

  const buttonStyles = [styles.button];
  if (customStyles) buttonStyles.push(customStyles);
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }
  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  }
  if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }
  if (highlighted)
    buttonStyles.push({
      backgroundColor: "#ff5500",
    });
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
}

// STYLES
const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  button: {
    backgroundColor: palette.background.buttons.primary,
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  text: {
    color: palette.text.buttons.primary,
    fontSize: 24,
  },
  textSecondary: {
    color: palette.text.buttons.secondary,
  },
  buttonSecondary: {
    backgroundColor: palette.background.buttons.secondary,
  },
  buttonAccent: {
    backgroundColor: palette.background.buttons.accent,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "center",
  },
  highlight: { color: palette.background.buttons.highlighted },
});
