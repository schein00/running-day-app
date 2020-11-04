import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Container, ContainerInfo, ContainerHeader } from './styles';
import Header from '../header/header';
const AppName = 'Should I go?';
import MainInfo from '../mainInfo/mainInfo';
import GoodDayInfo from '../goodDayInfo/GoodDayInfo';

export default function MainContainer(props) {
  let weather = props.weather;
  let UV = props.UV;

  const goodDay = props.goodDay;

  weather.weather = CurrentWeather(weather.weather);
  weather.color = AppColor(weather.temperature);
  if (weather === null) {
    return (
      <View>
        <Text>Ocorreu algum erro inesperado</Text>
      </View>
    );
  }
  return (
    <Container>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.imgBackground}
      >
        <StatusBar translucent={true} />
        <ContainerHeader>
          <Header text={AppName} color={weather.color} />
        </ContainerHeader>
        <ContainerInfo>
          <MainInfo componentType={'Clime'} params={weather} />
          <MainInfo componentType={'UV'} currentUV={UV.uvIndex} />
        </ContainerInfo>
        <GoodDayInfo goodDay={goodDay} />
        {/* <Text>temperature {w.temperature}</Text>
        <Text>windSpeed {w.windSpeed}</Text>
        <Text>humidity {w.humidity}</Text>
        <Text>weather {w.weather}</Text>
        <Text>tempColor {w.color}</Text>
        <Text>rainProb {w.rainProb}</Text>
        <Text>time {w.time}</Text> */}
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  imgBackground: { width: '100%', height: '100%' },
});

function CurrentWeather(weather) {
  switch (weather) {
    case 'Thunderstorm':
      return 'Storm';
    case 'Rain':
      return 'Rain';
    case 'Clear':
      return 'Sun';
    case 'Clouds':
      return 'Cloudy';
    case 'Drizzle':
      return 'Fog';
    case 'Snow':
      return 'Fog';
    case 'Atmosphere':
      return 'Fog';
    default:
      return 'Sun';
  }
}

function AppColor(temp) {
  let tempColor = null;
  if (5 >= temp) {
    tempColor = 'blue';
  } else if (6 <= temp && 10 >= temp) {
    tempColor = 'weakBlue';
  } else if (11 <= temp && 20 >= temp) {
    tempColor = 'green';
  } else if (21 <= temp && 30 >= temp) {
    tempColor = 'yellow';
  } else {
    tempColor = 'orange';
  }

  return tempColor;
}
