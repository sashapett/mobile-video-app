import { Stack } from "expo-router";
import "react-native-reanimated";

const RootLayout = () => {
  return (
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
  );
};

export default RootLayout;
