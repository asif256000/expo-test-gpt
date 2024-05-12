import React from "react";
import { View, Text } from "react-native";
// import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
// import { signinGoogle, configureGoogleSignIn } from "../src/utils/";
import { CustomButton, bodyStyles } from "../../../components";
import { router, useNavigation } from "expo-router";

const LoginButton = () => {
  const navigation = useNavigation();
  return (
    <>
      <CustomButton
        buttonTitle="Login"
        onPressFunction={
          () =>
            navigation.navigate("settings", {
              screen: "auth",
              params: { screen: "login" },
              initial: false,
            })
          // router.push("settings/auth/login")
        }
      />
    </>
  );
};

const SignupButton = () => {
  const navigation = useNavigation();
  return (
    <>
      <CustomButton
        buttonTitle="Create Account"
        onPressFunction={
          () =>
            navigation.navigate("settings", {
              screen: "auth",
              params: { screen: "signup" },
              initial: false,
            })
          // router.push("settings/auth/signup")
        }
      />
    </>
  );
};

export default function AuthScreen() {
  return (
    <View style={bodyStyles.container}>
      <Text style={bodyStyles.header1}>Welcome to{"\n"}the app!</Text>
      <Text style={bodyStyles.header2}>Please login or create account!</Text>
      <View style={bodyStyles.buttonContainer}>
        <LoginButton />
        <SignupButton />
        <CustomButton
          buttonTitle="Go Back"
          onPressFunction={() => router.back()}
        />
      </View>
    </View>
  );
}
