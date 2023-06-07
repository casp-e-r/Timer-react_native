import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BottomNavBar from "./src/components/BottomNavBar";
import globalStyles from "./src/styles/globalStyles";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";

export default function App() {
  const [orientation, setOrientation] = useState<any>(null);
  useEffect(() => {
    checkOrientation();
    const subscription = ScreenOrientation.addOrientationChangeListener(handleOrientationChange);
    return () => {
      subscription.remove();
    };
  }, []);
  const checkOrientation = async () => {
    const orientation = await ScreenOrientation.getOrientationAsync();
    setOrientation(orientation);
  };
  
  const handleOrientationChange = (orientationInfo:any) => {
    setOrientation(orientationInfo.orientation);
  };
  return (
    <SafeAreaView style={globalStyles.droidSafeArea}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <View
          style={{
            marginTop: "auto",
            marginBottom: 100,
            padding: 10,
            backgroundColor: "red",
          }}
        >
          <BottomNavBar />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 10,
    // alignItems: "center",
    justifyContent: "space-between",
  },
});
