import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>Expo News</Text>
      </View>

      <TouchableOpacity>
        <Ionicons
          name="settings-outline"
          size={24}
          color={Colors.black}
          onPress={() => router.push("/(stack)/(settings)/settings")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 20,
    color: "black",
    marginLeft: -12,
    marginTop: 2,
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  greet: {
    fontSize: 12,
    color: Colors.darkGrey,
  },
  name: {
    fontSize: 15,
    color: Colors.black,
    fontWeight: "bold",
  },
});
