import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Keyboard from "./components/Keyboard";
import Display from "./components/Display";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Display />
        <Keyboard />
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
