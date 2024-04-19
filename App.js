import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Keyboard from "./components/Keyboard";
import Display from "./components/Display";
import calculator from "./functions/calculations";
import Calculator from "./components/Calculator";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Calculator>
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
