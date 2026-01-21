import { ItemsProvider } from "@/contexts/ItemsContext";
import { Stack } from "expo-router";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <ItemsProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="item/[id]"
            options={{
              presentation: "modal",
              animation: "slide_from_right",
              headerShown: false,
            }}
          />
        </Stack>
      </ItemsProvider>
    </SafeAreaProvider>
  );
};

export default RootLayout;
