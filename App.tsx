import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BottomNavBar from "./src/components/BottomNavBar";
import globalStyles from "./src/styles/globalStyles";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";

export default function App() {
  const [orientation, setOrientation] = useState<null | ScreenOrientation.Orientation>(null);

  useEffect(() => {
    checkOrientation();
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);

    const subscription = ScreenOrientation.addOrientationChangeListener(handleOrientationChange);

    return () => {
      subscription.remove();
    };
  }, []);

  const checkOrientation = async () => {
    const currentOrientation = await ScreenOrientation.getOrientationAsync();
    setOrientation(currentOrientation);
  };

  const handleOrientationChange = (event: ScreenOrientation.OrientationChangeEvent) => {
    setOrientation(event.orientationInfo.orientation);
  };
  return (
    <SafeAreaView style={globalStyles.droidSafeArea}>
      <View style={styles.container}>
        <View style={{marginTop:5}}>
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>
        <StatusBar style="auto" />
        <View
          style={{
            marginTop: "auto",
            marginBottom: 6,
            padding: 10,
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
    marginVertical: 7,
    justifyContent: "space-between",
  },
});
