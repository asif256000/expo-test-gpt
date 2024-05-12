import React from "react";
import { View, Text } from "react-native";
import { bodyStyles } from "../components";

export default function AuthScreen() {
  return (
    <View style={bodyStyles.container}>
      <Text style={bodyStyles.header1}>Welcome!</Text>
    </View>
  );
}
