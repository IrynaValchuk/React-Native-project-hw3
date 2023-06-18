import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";

import { gStyles } from "../styles/global.styles";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showText, setShowText] = useState("Показати");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={gStyles.container}>
        <ImageBackground
          source={require("../assets/images/bgImage.jpg")}
          style={gStyles.bgImage}
          resizeMode="cover"
        >
          <View style={[gStyles.formContainer, styles.formContainer]}>
            <Text style={gStyles.title}>Увійти</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
              style={{ width: "100%" }}
            >
              <View style={gStyles.inputWrap}>
                <Input
                  placeholder="Адреса електронної пошти"
                  value={email}
                  onValue={setEmail}
                />
                <View>
                  <Input
                    value={password}
                    onValue={setPassword}
                    placeholder="Пароль"
                    secureTextEntry={secureTextEntry}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setShowText(
                        secureTextEntry === true ? "Приховати" : "Показати"
                      );
                      setSecureTextEntry(!secureTextEntry);
                    }}
                    style={gStyles.showPasswordBox}
                  >
                    <Text style={gStyles.text}>{showText}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
            <SubmitButton text="Увійти" />
            <Text style={gStyles.text}>Немає акаунту? Зареєструватися</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    height: 489,
    paddingTop: 32,
    paddingBottom: 144,
  },
});
