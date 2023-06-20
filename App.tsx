import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import globalStyles from "./src/styles/globalStyles";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect, useState } from "react";
import { useOrientation } from "./src/hooks/useOrientation";
import TopNavBar from "./src/components/TopNavBar";
import { Context } from "./src/helpers/contextProvider";

export default function App() {
  // const orientation1 = useOrientation();
  const [orientation, setOrientation] =
    useState<null | ScreenOrientation.Orientation>(null);
  useEffect(() => {
    checkOrientation();
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);

    const subscription = ScreenOrientation.addOrientationChangeListener(
      handleOrientationChange
    );
    return () => {
      subscription.remove();
    };
  }, []);
  const checkOrientation = async () => {
    const currentOrientation = await ScreenOrientation.getOrientationAsync();
    setOrientation(currentOrientation);
  };
  const handleOrientationChange = (
    event: ScreenOrientation.OrientationChangeEvent
  ) => {
    setOrientation(event.orientationInfo.orientation);
  };
  const [tab, setTab] = useState('time');
  const [theme, setTheme] = useState('');

  return (
    <Context.Provider value={{ tab: [tab, setTab], theme: [theme, setTheme] }}>
      <SafeAreaView style={globalStyles.droidSafeArea}>
        <View style={styles.container}>
          <View
            style={{
              marginBottom: "auto",
              marginTop: 6,
              padding: 10,
            }}
          >
            <TopNavBar />
          </View>
          <View style={{ marginTop: 5 }}>
            <Text>Open up App.tsx to start working on your app!</Text>
          </View>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </Context.Provider>
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
