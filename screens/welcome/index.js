import React, { useEffect } from "react";
import { View, Image, Text, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("ScreenAI3");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return <SafeAreaView style={[styles.container, _styles.lJfbuQFv]}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Image style={[styles.logo, _styles.rounded]} source={require("./logo.png")} />
          <Text style={[styles.text, _styles.mGJpNddW]}>
            Let's build something amazing together!
          </Text>
        </View>
        <Text style={[styles.footer, _styles.OxelFRzz]}>
          Made with ❤️ by Crowdbotics
        </Text>
      </ScrollView>
    </SafeAreaView>;
};

export default WelcomeScreen;

const _styles = StyleSheet.create({
  lJfbuQFv: {
    backgroundColor: "#00FF7F"
  },
  mGJpNddW: {
    color: "#FFFFFF"
  },
  OxelFRzz: {
    color: "#FFFFFF"
  },
  rounded: {
    borderRadius: 10
  }
});