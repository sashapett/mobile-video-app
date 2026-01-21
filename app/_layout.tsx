import { Stack } from "expo-router";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen
        name="item/[id]"
        options={{
          presentation: "modal",
          animation: "slide_from_right",
          headerShown: true,
          headerTitle: "Item Details",
        }}
      /> */}
      </Stack>
    </SafeAreaProvider>
  );
};

export default RootLayout;
