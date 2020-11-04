import React from 'react';
import { View, Text, Image } from 'react-native';
import Info from '../info/info';

import {
  Container,
  ContainerClime,
  ContainerUV,
  ContainerText,
} from './styles';
import styled from 'styled-components';

export default function MainInfo(props) {
  console.log('main');

  const param = props.params;
  const type = props.componentType;

  const uvIndex = props.currentUV;

  if (type === 'Clime')
    return Clime(
      param.time,
      param.temperature,
      param.weather,
      param.windSpeed,
      param.rainProb,
      param.humidity,
      param.color
    );
  else return UV(uvIndex);
}

function Clime(
  time,
  temperature,
  weather,
  windSpeed,
  rainProb,
  humidity,
  tempColor
) {
  let hour = time;
  hour = parseInt(hour);

  let day = true;

  if (hour <= 6 || hour >= 18) day = false;

  return (
    <Container>
      <ContainerClime>
        <Info
          compType={'temperature'}
          tempColor={tempColor}
          temperature={temperature}
          weather={weather}
          day={day}
        />
        <Info
          compType={'windRain'}
          tempColor={tempColor}
          windSpeed={windSpeed}
          rainProb={rainProb}
        />
        <Info compType={'humidity'} humidity={humidity} tempColor={tempColor} />
      </ContainerClime>
    </Container>
  );
}

function UV(uvIndex) {
  return (
    <Container>
      <ContainerUV>
        <Info compType={'UV'} uvIndex={uvIndex}></Info>
      </ContainerUV>
    </Container>
  );
}
