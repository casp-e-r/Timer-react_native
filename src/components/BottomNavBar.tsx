import React from "react";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  //   name: string;
}

const BottomNavBar: React.FC<Props> = () => {
  const completeTask = () => {};
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        activeOpacity={0.5}
        onPress={() => completeTask()}
      >
        <Text style={styles.text}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        activeOpacity={0.5}
        onPress={() => completeTask()}
      >
        <Text style={styles.text}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        activeOpacity={0.5}
        onPress={() => completeTask()}
      >
        <Text style={styles.text}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        activeOpacity={0.5}
        onPress={() => completeTask()}
      >
        <Text style={styles.text}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.box}
        activeOpacity={0.5}
        onPress={() => completeTask()}
      >
        <Text style={styles.text}>5</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 4,
    borderRadius: 20,
    borderWidth: 0.4,
    borderColor: "red",
    paddingTop: 10,
    paddingRight: 0,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  box: {
    backgroundColor: "red",
    height:50,
    padding: 10,
    width: 60,
  },
  text: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
});

export default BottomNavBar;
