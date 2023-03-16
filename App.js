import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, AppState } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Accelerometer } from 'expo-sensors';
import TcpSocket from 'react-native-tcp-socket';


import styles from "./styles.js";

export default function App(){
  const [page, setPage] = useState("number");
  const [number, setNumber] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [data, setData] = useState(null);
  const [ip, setIp] = useState(null);

  
  async function _storeData(key, text){
    try {
      if(text !== null || key !== null){
        await AsyncStorage.setItem(
          key,
          text,
        );
      }
    } catch (error) {
      // Error saving data
      console.log("Eroor");
    }
  };
  
  async function _getData(key){
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log(value);
        
        setIp(value);
      }
    } catch (error) {
      // Error retrieving data
      console.log("Eroor");
    }
  };
  
  const _subscribe = () => {
    _subscription = Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
    });
  };
  
  const _unsubscribe = () => {
    data && data.remove();
    setData(null);
  };
  
  
  useEffect(() => {
    _getData("ip");
    
    _subscribe();
    
    const options = {
      port: 8443,
      host: "example.com", //give your IP address
      tls: true,
  };
  
  // Create socket
  const client = TcpSocket.createConnection(options, () => {
    // Write on the socket
   client.write('Hello server!');
  
    // Close socket
   client.destroy();
  });
    return () => {
      _unsubscribe();
    };
  }, []);
  

  const handleSwitchPage = (page) => {
    setPage(page);
  };

  const handleIncreaseNumber = () => {
    setNumber(number + 1);
  };

  const handleSettingsPress = () => {
    setShowSettings(true);
  };

  const handleSettingsClose = () => {
    setShowSettings(false);
  };

  let x = data ? data.x : 0;
  let y = data ? data.y : 0;
  let z = data ? data.z : 0;

  return (
    <View style={styles.container}>
      {showSettings ? (
        <View style={styles.settingsContainer}>
          <TouchableOpacity
            style={styles.settingsCloseButton}
            onPress={handleSettingsClose}
          >
            <Text style={styles.settingsCloseButtonText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.settingsTitle}>Settings</Text>
          <View style={styles.settingsInputContainer}>
            <Text style={styles.settingsInputLabel}>Enter IP:</Text>
            <TextInput 
              style={styles.settingsInput} 
              onChangeText={(text) => {                
                _storeData("ip", text);
                _getData("ip");
              }}
            />
          </View>
        </View>
      ) : (
        <>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                page === "number" && styles.activeTabButton
              ]}
              onPress={() => handleSwitchPage("number")}
            >
              <Text
                style={[
                  styles.tabButtonText,
                  page === "number" && styles.activeTabButtonText
                ]}
              >
                CO2 produced
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                page === "text" && styles.activeTabButton
              ]}
              onPress={() => handleSwitchPage("text")}
            >
              <Text
                style={[
                  styles.tabButtonText,
                  page === "text" && styles.activeTabButtonText
                ]}
              >
                Tips
              </Text>
            </TouchableOpacity>
          </View>

          {page === "number" && (
            <View style={styles.pageContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleIncreaseNumber}
              >
                <Text style={styles.buttonText}>{number}kg</Text>
              </TouchableOpacity>
            </View>
          )}

          {page === "text" && (
            <View style={styles.pageContainer}>
              <Text style={styles.text}>
                Use heating controls
                Upgrade your heating system
                Insulate your home
                Low energy lighting
                Energy efficient appliances

              </Text>
            </View>
          )}

          <TouchableOpacity
            style={styles.settingsButton}
            onPress={handleSettingsPress}
          >
            <Text style={styles.settingsButtonText}>Settings</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
