import { SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
// import { RegistrationScreen } from "./screens/RegistrationScreen";
import { LoginScreen } from "./screens/LoginScreen";

import { gStyles } from "./styles/global.styles";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={gStyles.container}>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
    </SafeAreaView>
  );
}
