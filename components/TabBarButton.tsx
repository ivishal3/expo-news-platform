import { Colors } from "@/constants/Colors";
import { icon } from "@/constants/Icons";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const TabBarButton = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  label,
}: {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  routeName: string;
  label: string;
}) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarBtn}>
      {icon[routeName]({
        color: isFocused ? Colors.tabIconSelected : Colors.tabIconDefault,
        focused: isFocused,
      })}
      <Text
        style={{
          color: isFocused ? Colors.tabIconSelected : Colors.tabIconDefault,
          fontSize: 12,
          fontWeight: isFocused ? "600" : "400",
        }}>
        {label}
      </Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabbarBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
