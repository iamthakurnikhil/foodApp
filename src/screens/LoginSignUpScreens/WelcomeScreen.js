import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import logo from "../../../assests/logo.png";
import { colors, hr80 } from "../../globals/style";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Foodie</Text>
      <View style={styles.logoout}>
        <Image
          source={require("../../../assests/logo.png")}
          style={{ width: 500, height: 200 }}
        />
      </View>
      <View>
        
      </View>
      <View style={hr80} />
      <Text style={styles.text}>
        Find the best food around you at lowest price.
      </Text>
      <View style={hr80} />

      <View style={styles.btnout}>
        <TouchableOpacity onPress={() => navigation.navigate("signup")}>
          <Text style={styles.btn}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={styles.btn}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff4242",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    color: colors.col1,
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "200",
  },
  logoout: {
    width: "80%",
    height: "30%",
    // backgroundColor: '#fff',
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 20,
    width: "80%",
    color: colors.col1,
    textAlign: "center",
    fontWeight: "600",
  },
  btnout: {
    flexDirection: "row",
  },
  btn: {
    fontSize: 20,
    color: colors.text1,
    textAlign: "center",
    marginVertical: 30,
    marginHorizontal: 10,
    fontWeight: "700",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
  logged: {
    alignItems: "center",
  },
  txtlog: {
    fontSize: 16,
    color: colors.col1,
  },
  txtlogin: {
    fontSize: 16,
    color: colors.col1,
    fontWeight: "700",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
});
