import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ItemsProvider } from "../../contexts/ItemsContext";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);

const TabLayout = () => (
  <SafeAreaView style={styles.container} edges={["top"]}>
    <ItemsProvider>
      <MaterialTopTabs
        screenOptions={{
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "#8E8E93",
          tabBarStyle: {
            backgroundColor: "#ffffff",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: "#e5e5e5",
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#007AFF",
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
    </ItemsProvider>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default TabLayout;
