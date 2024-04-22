import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Switch, View } from "react-native";
import Keyboard from "./components/Keyboard";
import Display from "./components/Display";
import Calculator from "./components/Calculator";
import ColorSchemeSwitch from "./components/ColorSchemeSwitch";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Calculator>
          <ColorSchemeSwitch />
          <Display />
          <Keyboard />
        </Calculator>
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
});
