import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

const Login = ({navigation}:any) => {
  const windowDimensions = useWindowDimensions();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
        <Text style={{fontSize: 30, color: '#130160', fontWeight: '600'}}>
          Welcome Back
        </Text>
        <Text
          style={{
            width: windowDimensions.width * 0.8,
            textAlign: 'center',
            marginTop: 20,
          }}>
          We're glad to have you back. Start exploring exciting job
          opportunities today!
        </Text>
      </View>

      <View
        style={{
          width: windowDimensions.width * 0.8,
          marginHorizontal: 30,
          marginTop: 50,
        }}>
        <Text style={styles.label}>Email</Text>

        <TextInput placeholder="Enter your Email" style={styles.textInput} />
      </View>

      <View
        style={{
          width: windowDimensions.width * 0.8,
          marginHorizontal: 30,
          marginTop: 20,
        }}>
        <Text style={styles.label}>Password</Text>

        <TextInput
          placeholder="Enter your Password"
          secureTextEntry={!showPassword}
          style={styles.textInput}
        />
      </View>

      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
            gap: 10,
          }}>
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
              }}>
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

          <Text style={{color: '#aaa6b9'}}>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={{color: '#130160'}}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#130160',
            alignItems: 'center',
            height: 50,
            justifyContent: 'center',
            borderRadius: 10,
            width: windowDimensions.width * 0.8,
          }}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 15}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 10, alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#d6cdfe',
            alignItems: 'center',
            height: 50,
            justifyContent: 'center',
            borderRadius: 10,
            width: windowDimensions.width * 0.8,
          }}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 15}}>
            Sign In With Google
          </Text>
          <Image
            source={require('../assets/images/googleIcon.png')}
            style={{width: 30, height: 30, position: 'absolute', left: 50}}
          />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",top:10}}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
          <Text style={{color:"#ffaa56",left:5}}>Sign Up</Text>
        </TouchableOpacity>
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
});

export default Login;
