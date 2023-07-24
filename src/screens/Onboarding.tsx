import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import Lottie from 'lottie-react-native';



const Onboarding = ({navigation}:any) => {
  const windowDimensions = useWindowDimensions();
  
  

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ justifyContent: "flex-end", flexDirection: "row", padding: 20 }}>
        <Text style={{ fontSize: 25, color: "#232323", fontWeight: "600" }}>JobSpot</Text>
      </View>

      {/* Animated section */}
      <View style={{ justifyContent: "center", alignItems: "center", width: windowDimensions.width, height: windowDimensions.height * 0.5, marginTop: 40 }}>
        <Lottie source={require('../assets/images/animation_lkg27rt7.json')} autoPlay loop />
      </View>

      {/* Footer */}
     <View style={{margin:30}}>
        <Text style={{fontSize:30,fontWeight:"600",color:"#232323"}}>
            Find Your
        </Text>
        <Text style={{fontSize:30,fontWeight:"600",color:"#fca34d"}}>
            Dream Job
        </Text>
        <Text style={{fontSize:30,fontWeight:"600",color:"#232323"}}>
            Here
        </Text>

        <Text style={{color:"#232323"}}>
        Explore all the most exciting job roles based 
        on your interest and study major.
        </Text>
     </View>

        {/* Button */}
        <View style={{justifyContent:"flex-end",flexDirection:"row",bottom:20,right:20}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                <Image 
                source={require('../assets/images/onboardingButton.png')}
                />
            </TouchableOpacity>
           </View>


    </View>
  )
}

export default Onboarding;

const styles = StyleSheet.create({});
