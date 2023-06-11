import { StyleSheet, TouchableOpacity, Text } from "react-native";

export const SubmitButton = ({ text }) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    width: "100%",
    height: 50,

    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  textBtn: {
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
});
