import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  PermissionsAndroid,
  AsyncStorage,
} from 'react-native';

import MainContainer from './src/mainContainer/MainContainer.js';

import Geolocation from 'react-native-geolocation-service';

import api from './src/services/api';

const apiKey = '9855d1d223d340e9fbd0187c1f533f40';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  text: {
    color: 'orange',
    fontSize: 40,
  },
});

export default function App() {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [userPosition, setUserPosition] = useState(false);
  const [weather, setWeather] = useState(false);
  const [UV, setUV] = useState(false);
  const [good, setGood] = useState(false);

  async function verifyLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('permissão concedida');
        setHasLocationPermission(true);
      } else {
        console.error('permissão negada');
        setHasLocationPermission(false);
      }
    } catch (err) {
      console.warn(err);
    }
  }

  async function getWeather() {
    console.log('pegando clima');
    console.log(userPosition);
    const response = await api.get('/data/2.5/weather', {
      lat: userPosition.latitude,
      lon: userPosition.longitude,
      appid: apiKey,
      units: 'metric',
    });
    console.log(response);
    if (response.data.cod === '400') {
      try {
        const wCache = JSON.parse(await AsyncStorage.getItem('Local_Weather'));
        setWeather(wCache);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('pega api');
      setWeather({
        windSpeed: response.data.wind.speed,
        humidity: response.data.main.humidity,
        temperature: response.data.main.feels_like.toFixed(1),
        weather: response.data.weather.main,
        color: 'green',
        rainProb: 20,
        time: new Date().getHours(),
      });
      await AsyncStorage.setItem('Local_Weather', JSON.stringify(weather));
    }
  }

  async function getUV() {
    try {
      const uvCache = JSON.parse(await AsyncStorage.getItem('Local_UV'));
      console.log(userPosition);
      let response = await api.get('/data/2.5/uvi', {
        lat: userPosition.latitude,
        lon: userPosition.longitude,
        appid: apiKey,
      });
      console.log(response);
      if (response.data.cod === '400') {
        const uvCache = JSON.parse(await AsyncStorage.getItem('Local_UV'));
        setUV(uvCache);
      } else {
        setUV({
          uvIndex: response.data.value,
        });
        await AsyncStorage.setItem('Local_UV', JSON.stringify(UV));
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function goodDay() {
    if (UV.uvIndex <= 60) {
      if (
        weather.weather === 'Clear' ||
        weather.weather === 'Clouds' ||
        weather.weather === 'Drizzle' ||
        weather.weather === 'Atmosphere' ||
        weather.weather === 'Sun'
      ) {
        if (weather.humidity >= 35 && weather.humidity <= 95) {
          if (weather.windSpeed <= 60) setGood(true);
        }
      }
    }
  }

  useEffect(() => {
    async function doNow() {
      await verifyLocationPermission();

      if (hasLocationPermission) {
        Geolocation.getCurrentPosition(
          (position) => {
            setUserPosition({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.log(error.code, error.message);
          }
        );
        await getWeather();
        await getUV();
        await goodDay();
        console.log('good Day  ' + good);
      }
    }
    doNow();
  }, [hasLocationPermission]);

  return (
    <View style={styles.container}>
      {/* <Text>Latitude: {userPosition.latitude}</Text>
      <Text>Longitude: {userPosition.longitude}</Text> */}
      <MainContainer weather={weather} UV={UV} goodDay={good} />
    </View>
  );
}
