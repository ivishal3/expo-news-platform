import { Colors } from "@/constants/Colors";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Page = () => {
  return (
    <View style={styles.container}>
      {/* Content section  */}
      <View style={styles.detailSection}>
        <TouchableOpacity style={styles.touchaleOpacity}>
          <FontAwesome5 name="user-alt" size={24} color={Colors.tint} />
          <Text style={styles.detailSectionText}>Profile</Text>
          <MaterialIcons name="arrow-right" size={34} color={Colors.tint} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchaleOpacity}>
          <Entypo name="share" size={24} color={Colors.tint} />
          <Text style={styles.detailSectionText}>Share with Friends</Text>
          <MaterialIcons name="arrow-right" size={34} color={Colors.tint} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchaleOpacity}>
          <Ionicons name="settings" size={24} color={Colors.tint} />
          <Text style={styles.detailSectionText}>Settings</Text>
          <MaterialIcons name="arrow-right" size={34} color={Colors.tint} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    alignItems: "center",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: Colors.tint,
  },
  detailSection: {
    margin: 20,
    paddingBottom: 20,
    gap: 20,
    borderRadius: 10,
  },
  touchaleOpacity: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailSectionText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: Colors.black,
  },
  logOut: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    color: Colors.white,
    backgroundColor: Colors.tint,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logButtonSection: {
    bottom: 0,
    margin: 20,
    position: "absolute",
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
  },
  logOutText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 80,
    borderRadius: 10,
    alignItems: "center",
    gap: 20,
  },
});
