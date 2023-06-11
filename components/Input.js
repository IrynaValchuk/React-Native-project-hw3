import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export const Input = ({ placeholder, secureTextEntry }) => {
  const [focus, setFocus] = useState(false);

  return (
    <TextInput
      style={[styles.input, { borderColor: focus ? "#FF6C00" : "#E8E8E8" }]}
      placeholder={placeholder}
      placeholderTextColor="#BDBDBD"
      secureTextEntry={secureTextEntry}
      onFocus={() => {
        setFocus(true);
      }}
      onBlur={() => {
        setFocus(false);
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,

    fontFamily: "RobotoRegular",
    fontSize: 16,
    lineHeight: 19,

    color: "#212121",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
  },
});
