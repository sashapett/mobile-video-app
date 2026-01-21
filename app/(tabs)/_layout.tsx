import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);

const TabLayout = () => (
  <SafeAreaView style={styles.container} edges={["top"]}>
    <MaterialTopTabs
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#8E8E93",
        tabBarStyle: {
          backgroundColor: "#1c1c1e",
          borderBottomColor: "#2c2c2e",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#fff",
          height: 3,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "600",
          textTransform: "none",
        },
        swipeEnabled: true,
      }}
    >
      <MaterialTopTabs.Screen
        name="index"
        options={{
          title: "Pets",
        }}
      />
      <MaterialTopTabs.Screen
        name="people"
        options={{
          title: "People",
        }}
      />
    </MaterialTopTabs>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1e",
  },
});

export default TabLayout;
