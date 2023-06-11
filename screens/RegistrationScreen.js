import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";

import { gStyles } from "../styles/global.styles";

export const RegistrationScreen = () => {
  return (
    <View style={gStyles.container}>
      <ImageBackground
        source={require("../assets/images/bgImage.jpg")}
        resizeMode="cover"
        style={gStyles.bgImage}
      >
        <View style={gStyles.formContainer}>
          <View style={gStyles.addImageBox}>
            <TouchableOpacity style={gStyles.addImageBtn}>
              <Image source={require("../assets/images/addImageBtn.png")} />
            </TouchableOpacity>
          </View>
          <Text style={gStyles.title}>Реєстрація</Text>
          <View style={gStyles.inputWrap}>
            <Input placeholder="Логін" />
            <Input placeholder="Адреса електронної пошти" />
            <View>
              <Input placeholder="Пароль" secureTextEntry={true} />
              <TouchableOpacity style={gStyles.showPasswordBox}>
                <Text style={gStyles.text}>Показати</Text>
              </TouchableOpacity>
            </View>
          </View>
          <SubmitButton text="Зареєстуватися" />
          <Text style={gStyles.text}>Вже є акаунт? Увійти</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
