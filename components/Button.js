import { StyleSheet, Dimensions, Text, TouchableOpacity } from "react-native";

Button.defaultProps = {
  colorScheme: "dark",
};
export default function Button(props) {
  const { onPress, text, theme, size } = props;

  const buttonStyles = [styles.button];
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
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
  textSecondary: {
    color: "#060606",
  },
  buttonSecondary: {
    backgroundColor: "#819bc7",
  },
  buttonAccent: {
    backgroundColor: "#ff7b00",
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "center",
  },
});
