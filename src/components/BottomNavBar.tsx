import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  //   name: string;
}

const BottomNavBar: React.FC<Props> = () => {
  const completeTask = () => {};
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={() => completeTask()}>
        <View style={styles.box}>
          <Text style={styles.text}>1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} onPress={() => completeTask()}>
        <View style={styles.box}>
          <Text style={styles.text}>2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} onPress={() => completeTask()}>
        <View style={styles.box}>
          <Text style={styles.text}>3</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} onPress={() => completeTask()}>
        <View style={styles.box}>
          <Text style={styles.text}>4</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} onPress={() => completeTask()}>
        <View style={styles.box}>
          <Text style={styles.text}>5</Text>
        </View>
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
  },
  box: {
    backgroundColor: "#ccc",
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
