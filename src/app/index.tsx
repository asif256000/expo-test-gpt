import { router, useNavigation } from "expo-router";
import { View, SafeAreaView } from "react-native";
import { CustomButton, SettingsButton, bodyStyles } from "../components";

export default function App() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[bodyStyles.container, { width: "100%" }]}>
      {/* <View style={bodyStyles.settingsButtonContainer}>
        <SettingsButton onPressFunction={() => router.push("settings")} />
      </View> */}
      <View style={bodyStyles.buttonContainer}>
        <CustomButton
          buttonTitle="Chat"
          onPressFunction={() => {
            navigation.navigate("chat", { screen: "index", initial: false });
            // router.push("chat");
          }}
        />
      </View>
    </SafeAreaView>
  );
}
