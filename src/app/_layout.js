import { StatusBar } from "expo-status-bar";
import { use, useEffect } from "react";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { loadFonts } from "../lib/font";
import "../../global.css";

export default function RootLayout() {
  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }} edges={["bottom", "top"]}>
          <Stack
            screenOptions={{
              headerShown: false,
              StatusBarBackgroundColor: "#ffffff",
              StatusBarStyle: "dark",
              ContentStyle: { backgroundColor: "#f2f2f2" },
            }}
          >
            <StatusBar style="dark" />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}
