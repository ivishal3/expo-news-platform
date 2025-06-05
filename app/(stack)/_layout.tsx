import { Stack } from "expo-router";

const NotificationLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(settings)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};
export default NotificationLayout;
