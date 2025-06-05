import { Stack } from "expo-router";

const NotificationLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
        }}
      />
    </Stack>
  );
};
export default NotificationLayout;
