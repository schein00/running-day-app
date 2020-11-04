import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {
  BlueSun,
  BlueMoon,
  BlueFogDay,
  BlueFogNight,
  BlueWind,
  BlueStorm,
  BlueRain,
  BlueDroplet,
  BlueCloudyDay,
  BlueCloudyNight,
  BlueRainy,
} from '../common/import/blueIcons';

import {
  WeakBlueSun,
  WeakBlueMoon,
  WeakBlueFogDay,
  WeakBlueFogNight,
  WeakBlueWind,
  WeakBlueStorm,
  WeakBlueRain,
  WeakBlueDroplet,
  WeakBlueCloudyDay,
  WeakBlueCloudyNight,
  WeakBlueRainy,
} from '../common/import/weakBlueIcons';

import {
  GreenSun,
  GreenMoon,
  GreenFogDay,
  GreenFogNight,
  GreenWind,
  GreenStorm,
  GreenRain,
  GreenDroplet,
  GreenCloudyDay,
  GreenCloudyNight,
  GreenRainy,
  GreenUV,
} from '../common/import/greenIcons';

import {
  YellowSun,
  YellowMoon,
  YellowFogDay,
  YellowFogNight,
  YellowWind,
  YellowStorm,
  YellowRain,
  YellowDroplet,
  YellowCloudyDay,
  YellowCloudyNight,
  YellowRainy,
  YellowUV,
} from '../common/import/yellowIcons';

import {
  OrangeSun,
  OrangeMoon,
  OrangeFogDay,
  OrangeFogNight,
  OrangeWind,
  OrangeStorm,
  OrangeRain,
  OrangeDroplet,
  OrangeCloudyDay,
  OrangeCloudyNight,
  OrangeRainy,
  OrangeUV,
} from '../common/import/orangeIcons';

export default function IconComponent(props) {
  const color = props.tempColor;
  const img = props.weather;
  const day = props.day;

  if (color === 'blue') return IconBlue(img, day);
  else if (color === 'weakBlue') return IconWeakBlue(img, day);
  else if (color === 'green') return IconGreen(img, day);
  else if (color === 'yellow') return IconYellow(img, day);
  else if (color === 'orange') return IconOrange(img, day);
  else return <View></View>;
}

function IconBlue(img, day) {
  if (img == 'Sun' && day)
    return <Image source={BlueSun()} style={styles.logo}></Image>;
  else if (img == 'Sun' && !day)
    return <Image source={BlueMoon()} style={styles.logo}></Image>;
  else if (img == 'Fog' && day)
    return <Image source={BlueFogDay()} style={styles.logo}></Image>;
  else if (img == 'Fog' && !day)
    return <Image source={BlueFogNight()} style={styles.logo}></Image>;
  else if (img == 'Wind') return <Image source={BlueWind()}></Image>;
  else if (img == 'Storm')
    return <Image source={BlueStorm()} style={styles.logo}></Image>;
  else if (img == 'Rain')
    return <Image source={BlueRain()} style={styles.logo}></Image>;
  else if (img == 'Droplet') return <Image source={BlueDroplet()}></Image>;
  else if (img == 'Rainy') return <Image source={BlueRainy()}></Image>;
  else if (img == 'Cloudy' && day)
    return <Image source={BlueCloudyDay()} style={styles.logo}></Image>;
  else if (img == 'Cloudy' && !day)
    return <Image source={BlueCloudyNight()} style={styles.logo}></Image>;
  else return <View></View>;
}

function IconWeakBlue(img, day) {
  if (img == 'Sun' && day)
    return <Image source={WeakBlueSun()} style={styles.logo}></Image>;
  else if (img == 'Sun' && !day)
    return <Image source={WeakBlueMoon()} style={styles.logo}></Image>;
  else if (img == 'Fog' && day)
    return <Image source={WeakBlueFogDay()} style={styles.logo}></Image>;
  else if (img == 'Fog' && !day)
    return <Image source={WeakBlueFogNight()} style={styles.logo}></Image>;
  else if (img == 'Wind') return <Image source={WeakBlueWind()}></Image>;
  else if (img == 'Storm')
    return <Image source={WeakBlueStorm()} style={styles.logo}></Image>;
  else if (img == 'Rain')
    return <Image source={WeakBlueRain()} style={styles.logo}></Image>;
  else if (img == 'Droplet') return <Image source={WeakBlueDroplet()}></Image>;
  else if (img == 'Rainy') return <Image source={WeakBlueRainy()}></Image>;
  else if (img == 'Cloudy' && day)
    return <Image source={WeakBlueCloudyDay()} style={styles.logo}></Image>;
  else if (img == 'Cloudy' && !day)
    return <Image source={WeakBlueCloudyNight()} style={styles.logo}></Image>;
  else return <View></View>;
}

function IconGreen(img, day) {
  if (img == 'Sun' && day)
    return <Image source={GreenSun()} style={styles.logo}></Image>;
  else if (img == 'Sun' && !day)
    return <Image source={GreenMoon()} style={styles.logo}></Image>;
  else if (img == 'Fog' && day)
    return <Image source={GreenFogDay()} style={styles.logo}></Image>;
  else if (img == 'Fog' && !day)
    return <Image source={GreenFogNight()} style={styles.logo}></Image>;
  else if (img == 'Wind') return <Image source={GreenWind()}></Image>;
  else if (img == 'Storm')
    return <Image source={GreenStorm()} style={styles.logo}></Image>;
  else if (img == 'Rain')
    return <Image source={GreenRain()} style={styles.logo}></Image>;
  else if (img == 'Droplet') return <Image source={GreenDroplet()}></Image>;
  else if (img == 'Rainy') return <Image source={GreenRainy()}></Image>;
  else if (img == 'UV')
    return <Image source={GreenUV()} style={styles.UV}></Image>;
  else if (img == 'Cloudy' && day)
    return <Image source={GreenCloudyDay()} style={styles.logo}></Image>;
  else if (img == 'Cloudy' && !day)
    return <Image source={GreenCloudyNight()} style={styles.logo}></Image>;
  else return <View></View>;
}

function IconYellow(img, day) {
  if (img == 'Sun' && day)
    return <Image source={YellowSun()} style={styles.logo}></Image>;
  else if (img == 'Sun' && !day)
    return <Image source={YellowMoon()} style={styles.logo}></Image>;
  else if (img == 'Fog' && day)
    return <Image source={YellowFogDay()} style={styles.logo}></Image>;
  else if (img == 'Fog' && !day)
    return <Image source={YellowFogNight()} style={styles.logo}></Image>;
  else if (img == 'Wind') return <Image source={YellowWind()}></Image>;
  else if (img == 'Storm')
    return <Image source={YellowStorm()} style={styles.logo}></Image>;
  else if (img == 'Rain')
    return <Image source={YellowRain()} style={styles.logo}></Image>;
  else if (img == 'Droplet') return <Image source={YellowDroplet()}></Image>;
  else if (img == 'Rainy') return <Image source={YellowRainy()}></Image>;
  else if (img == 'UV')
    return <Image source={YellowUV()} style={styles.UV}></Image>;
  else if (img == 'Cloudy' && day)
    return <Image source={YellowCloudyDay()} style={styles.logo}></Image>;
  else if (img == 'Cloudy' && !day)
    return <Image source={YellowCloudyNight()} style={styles.logo}></Image>;
  else return <View></View>;
}

function IconOrange(img, day) {
  if (img == 'Sun' && day)
    return <Image source={OrangeSun()} style={styles.logo}></Image>;
  else if (img == 'Sun' && !day)
    return <Image source={OrangeMoon()} style={styles.logo}></Image>;
  else if (img == 'Fog' && day)
    return <Image source={OrangeFogDay()} style={styles.logo}></Image>;
  else if (img == 'Fog' && !day)
    return <Image source={OrangeFogNight()} style={styles.logo}></Image>;
  else if (img == 'Wind') return <Image source={OrangeWind()}></Image>;
  else if (img == 'Storm')
    return <Image source={OrangeStorm()} style={styles.logo}></Image>;
  else if (img == 'Rain')
    return <Image source={OrangeRain()} style={styles.logo}></Image>;
  else if (img == 'Droplet') return <Image source={OrangeDroplet()}></Image>;
  else if (img == 'Rainy') return <Image source={OrangeRainy()}></Image>;
  else if (img == 'UV')
    return <Image source={OrangeUV()} style={styles.UV}></Image>;
  else if (img == 'Cloudy' && day)
    return <Image source={OrangeCloudyDay()} style={styles.logo}></Image>;
  else if (img == 'Cloudy' && !day)
    return <Image source={OrangeCloudyNight()} style={styles.logo}></Image>;
  else return <View></View>;
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  tiny: {
    width: 50,
    height: 50,
  },
  UV: {
    width: 100,
    height: 100,
  },
});
