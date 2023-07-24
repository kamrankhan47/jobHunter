import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  useWindowDimensions,
  Image,
} from 'react-native';
import Lottie from 'lottie-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignUp = () => {
  const windowDimensions = useWindowDimensions();
  const containerWidth = windowDimensions.width * 0.8;

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f2f2f4' }}>
      {/* Header */}
      <View
        style={{
          alignItems: 'center',
          padding: 30,
          width: windowDimensions.width,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: '600', color: '#0d0140' }}>
          Create an account
        </Text>

        <Lottie
          source={require('../assets/images/animation_lkgfe1e5.json')}
          autoPlay
          loop
          style={{ width: 200, height: 200 }}
        />
      </View>

      {/* SignUp */}
      <View style={{ width: containerWidth, marginHorizontal: 30 }}>
        <Text style={styles.label}>Full Name</Text>

        <TextInput
          placeholder="Enter your Name"
          style={styles.textInput}
        />
      </View>
      <View style={{ width: containerWidth, marginHorizontal: 30 }}>
        <Text style={styles.label}>Email</Text>

        <TextInput
          placeholder="Enter your Email"
          style={styles.textInput}
        />
      </View>
      <View style={{ width: containerWidth, marginHorizontal: 30 }}>
        <Text style={styles.label}>Password</Text>

        <View style={styles.passwordInputContainer}>
          <TextInput
            placeholder="Enter your Password"
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
          />
          <TouchableOpacity
            onPress={toggleShowPassword}
            style={styles.eyeIconContainer}
          >
            <Image
              source={
                showPassword
                  ? require('../assets/images/eye.png')
                  : require('../assets/images/eye-hidden.png')
              }
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TouchableOpacity onPress={toggleRememberMe}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 4,
                  borderWidth: 1,
                  borderColor: '#130160',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {rememberMe && (
                  <View
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 3,
                      backgroundColor: '#130160',
                    }}
                  />
                )}
              </View>
            </TouchableOpacity>

            <Text style={{ color: '#aaa6b9' }}>Remember me</Text>
          </View>
          <TouchableOpacity>
            <Text style={{ color: '#130160' }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={{ left: 10, marginTop: 30 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#130160',
              alignItems: 'center',
              height: 50,
              justifyContent: 'center',
              borderRadius: 10,
            }}
          >
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 15 }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ left: 10, marginTop: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#d6cdfe',
              alignItems: 'center',
              height: 50,
              justifyContent: 'center',
              borderRadius: 10,
            }}
          >
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 15 }}>
              Sign Up With Google
            </Text>
            <Image
              source={require('../assets/images/googleIcon.png')}
              style={{ width: 30, height: 30, position: 'absolute', left: 50 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#1f144e',
    fontWeight: '600',
    left: 10,
  },
  textInput: {
    borderRadius: 10,
    margin: 10,
    padding: 10,
    width: '100%',
    backgroundColor: '#fff',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-between', // Align the eye icon to the end
    left: 10,
    top: 10,
  },
  passwordInput: {
    flex: 1,
  },
  eyeIconContainer: {
    padding: 5,
  },
  eyeIcon: {
    width: 17,
    height: 13,
  },
});

export default SignUp;
