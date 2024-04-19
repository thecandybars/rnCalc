import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Open up App.js to start working on your app!</Text>
        <Button text="+" theme="accent"></Button>
        <Button text="C" theme="secondary"></Button>
        <Button text="4"></Button>
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
