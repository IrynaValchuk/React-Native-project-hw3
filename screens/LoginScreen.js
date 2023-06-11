import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";

import { gStyles } from "../styles/global.styles";

export const LoginScreen = () => {
  return (
    <View style={gStyles.container}>
      <ImageBackground
        source={require("../assets/images/bgImage.jpg")}
        resizeMode="cover"
        style={gStyles.bgImage}
      >
        <View style={[gStyles.formContainer, styles.formContainer]}>
          <Text style={gStyles.title}>Увійти</Text>
          <View style={gStyles.inputWrap}>
            <Input placeholder="Адреса електронної пошти" />
            <View>
              <Input placeholder="Пароль" secureTextEntry={true} />
              <TouchableOpacity style={gStyles.showPasswordBox}>
                <Text style={gStyles.text}>Показати</Text>
              </TouchableOpacity>
            </View>
          </View>
          <SubmitButton text="Увійти" />
          <Text style={gStyles.text}>Немає акаунту? Зареєструватися</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    height: 489,
    paddingTop: 32,
    paddingBottom: 144,
  },
});
