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
  Alert,
} from "react-native";
import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";

import { gStyles } from "../styles/global.styles";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(true);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handelSubmit = () => {
    if (email === "" || password === "") {
      Alert.alert("Помилка", "Введіть всі необхідні дані");
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert("Помилка", "Введіть дійсну електронну пошту.");
      return;
    }
    console.log(`"email:" ${email}, "password:" ${password}`);
    setEmail("");
    setPassword("");
  };

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

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
                  value={email}
                  onValue={setEmail}
                  keyboardType="email-address"
                  placeholder="Адреса електронної пошти"
                />
                <View>
                  <Input
                    value={password}
                    onValue={setPassword}
                    placeholder="Пароль"
                    secureTextEntry={isShowPassword}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      handleShowPassword();
                    }}
                    style={gStyles.showPasswordBox}
                  >
                    <Text style={gStyles.text}>
                      {isShowPassword ? "Показати" : "Приховати"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
            <SubmitButton text="Увійти" onPress={handelSubmit} />
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
