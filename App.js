import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import Row from "./components/Row";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.value}>{parseFloat(0).toLocaleString()}</Text>
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
          <Button text="=" theme="primary" size="double" />
        </Row>
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
  value: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
