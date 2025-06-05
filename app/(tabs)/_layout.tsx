import { TabBar } from "@/components/TabBar";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="discover"
        options={{ title: "Discover", headerShown: false }}
      />
      <Tabs.Screen name="liked" options={{ title: "Liked" }} />
    </Tabs>
  );
}

// // import { TabBar } from "@/components/TabBar";
// import { Tabs } from "expo-router";
// import React from "react";

// const TabLayout = () => {
//   return (
//     <Tabs
//       // tabBar={(props) => <TabBar {...props} />}
//       screenOptions={{ headerShown: false }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//         }}
//       />
//       <Tabs.Screen
//         name="discover"
//         options={{
//           title: "Discover",
//         }}
//       />
//       <Tabs.Screen
//         name="saved"
//         options={{
//           title: "Saved",
//         }}
//       />
//     </Tabs>
//   );
// };

// export default TabLayout;
