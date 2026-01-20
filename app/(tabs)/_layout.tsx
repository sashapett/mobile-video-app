import { Tabs } from "expo-router";
import { Platform } from "react-native";

const TabLayout = () => (
  <Tabs
    screenOptions={{
      tabBarActiveTintColor: "#007AFF",
      tabBarInactiveTintColor: "#8E8E93",
      headerShown: true,
      tabBarStyle: Platform.select({
        ios: {
          position: "absolute",
          backgroundColor: "#ffffff",
        },
        default: {
          backgroundColor: "#ffffff",
        },
      }),
    }}
  >
    <Tabs.Screen
      name="index"
      options={{
        title: "Pets",
        tabBarLabel: "Pets",
        headerTitle: "Pets",
      }}
    />
    <Tabs.Screen
      name="people"
      options={{
        title: "People",
        tabBarLabel: "People",
        headerTitle: "People",
      }}
    />
  </Tabs>
);

export default TabLayout;
