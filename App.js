import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Calculator from "./components/Calculator";

import MainView from "./components/MainView/MainView";
import ColorSchemeProvider from "./components/ColorScheme/ColorSchemeProvider";
import ColorSchemeSwitch from "./components/ColorScheme/ColorSchemeSwitch";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ColorSchemeProvider>
          <MainView>
            <ColorSchemeSwitch />
            <Calculator />
            {/* <StatusBar style="default" /> */}
          </MainView>
        </ColorSchemeProvider>
      </SafeAreaView>
    </View>
  );
}

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
