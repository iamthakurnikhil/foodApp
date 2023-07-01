import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "../src/screens/LoginSignUpScreens/WelcomeScreen";
import LoginScreen from "../src/screens/LoginSignUpScreens/LoginScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from "../src/screens/LoginSignUpScreens/SignUp";

export default function Page() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcomepage'>
        <Stack.Screen name="welcomepage" component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="signup" component={SignUp}
          options={{
            headerShown: false,

          }}
        />
        <Stack.Screen name="login" component={LoginScreen}
          options={{
            headerShown: false,

          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
