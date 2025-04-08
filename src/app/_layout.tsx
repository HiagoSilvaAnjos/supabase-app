import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="(auth)/signup/page"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(painel)/profile/page"
          options={{ headerShown: false }}
        />
      </Stack>
    </>
  );
}
