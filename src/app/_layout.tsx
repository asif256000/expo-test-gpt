import { Stack, router, useNavigation } from "expo-router";
import {
  ThemeProvider,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { StatusBar, useColorScheme } from "react-native";
import { SettingsButton } from "../components";
// import { ThemeProvider as CustomThemeProvider } from "../context";

export default function HomePageLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    // <CustomThemeProvider></CustomThemeProvider>
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar barStyle="default" />
      <Stack
        screenOptions={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "black" },
          headerTitleStyle: { fontWeight: "bold" },
          // headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Home Page",
            headerRight: () => (
              <SettingsButton
                color="white"
                onPressFunction={
                  () =>
                    navigation.navigate("settings", {
                      screen: "index",
                      initial: false,
                    })
                  // router.push("settings")
                }
              />
            ),
          }}
        />
        <Stack.Screen name="settings" options={{ title: "Settings" }} />
        <Stack.Screen name="chat" options={{ title: "Chats" }} />
      </Stack>
    </ThemeProvider>
  );
}
