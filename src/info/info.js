import React from 'react';
import { View, Text } from 'react-native';

import {
  Container,
  ContainerTemperature,
  ContainerHumidity,
  ContainerWindRain,
  ContainerText,
  ContainerTemperatureText,
  ContainerClima,
  TextClima,
  ContainerWind,
  TextWind,
  TextRainyLabel,
  ContainerRain,
  TextRainy,
  TextHumidityLabel,
  TextHumidity,
  ContainerHumidityInfo,
  ContainerUV,
  ContainerUVIcon,
  ContainerUVInfo,
  TextUVInfo,
  TextUVIndex,
} from './styles';
import IconComponent from '../iconComponent/iconComponent';
import { GreenUV } from '../common/import/greenIcons';

export default function Info(props) {
  if (props.compType === 'temperature')
    return TemperatureInfo(
      props.temperature,
      props.weather,
      props.day,
      props.tempColor
    );
  else if (props.compType === 'windRain')
    return WindRainInfo(props.tempColor, props.rainProb, props.windSpeed);
  else if (props.compType === 'humidity')
    return HumidityInfo(props.tempColor, props.humidity);
  else if (props.compType === 'UV') return UV(props.uvIndex);
}

function TemperatureInfo(temperature, weather, day, tempColor) {
  return (
    <Container>
      <ContainerTemperature>
        <ContainerClima>
          <IconComponent
            tempColor={tempColor}
            weather={weather}
            day={day}
          ></IconComponent>
          <ContainerText textColor={tempColor}>
            <TextClima> {Traduz(weather)} </TextClima>
          </ContainerText>
        </ContainerClima>

        <ContainerText textColor={tempColor}>
          <ContainerTemperatureText>{temperature}°</ContainerTemperatureText>
        </ContainerText>
      </ContainerTemperature>
    </Container>
  );
}

function WindRainInfo(tempColor, rainProb, windSpeed) {
  return (
    <Container>
      <ContainerWindRain>
        <View>
          <ContainerWind>
            <TextWind>
              <ContainerText textColor={tempColor}> Vento</ContainerText>
            </TextWind>
          </ContainerWind>
          <ContainerWind>
            <IconComponent
              tempColor={tempColor}
              weather={'Wind'}
              day={false}
            ></IconComponent>
            <TextWind>
              <ContainerText textColor={tempColor}>
                {windSpeed} km/h
              </ContainerText>
            </TextWind>
          </ContainerWind>
        </View>
        <View>
          <ContainerText textColor={tempColor}>
            <TextRainyLabel>{`Probabilidade \n de Chover`}</TextRainyLabel>
          </ContainerText>
          <ContainerRain>
            <IconComponent
              tempColor={tempColor}
              weather={'Rainy'}
              day={false}
            ></IconComponent>
            <TextRainy>
              <ContainerText textColor={tempColor}>{rainProb}%</ContainerText>
            </TextRainy>
          </ContainerRain>
        </View>
      </ContainerWindRain>
    </Container>
  );
}

function HumidityInfo(tempColor, humidity) {
  return (
    <Container>
      <ContainerHumidity>
        <ContainerText textColor={tempColor}>
          <TextHumidityLabel>Umidade Relativa do Ar</TextHumidityLabel>
        </ContainerText>
        <ContainerHumidityInfo>
          <IconComponent
            tempColor={tempColor}
            weather={'Droplet'}
            day={false}
          ></IconComponent>
          <ContainerText textColor={tempColor}>
            <TextHumidity>{humidity} %</TextHumidity>
          </ContainerText>
        </ContainerHumidityInfo>
      </ContainerHumidity>
    </Container>
  );
}

function Traduz(weather) {
  if (weather === 'Sun') return 'Ensolarado';
  else if (weather === 'Rain') return 'Chuvoso';
  else if (weather === 'Storm') return 'Tempestade';
  else if (weather === 'Fog') return 'Nevoeiro';
  else if (weather === 'Cloudy') return 'Nublado';
  else return '';
}

function UV(uvIndex) {
  let uvColor;
  if (uvIndex <= 40) uvColor = 'green';
  else if (uvIndex > 40 && uvIndex <= 60) uvColor = 'yellow';
  else uvColor = 'orange';

  return (
    <ContainerUV>
      <ContainerUVIcon>
        <IconComponent
          tempColor={uvColor}
          weather={'UV'}
          day={false}
        ></IconComponent>
      </ContainerUVIcon>
      <ContainerUVInfo>
        <TextUVInfo>
          <ContainerText textColor={uvColor}>
            Incidencia de raios ultra violetas
          </ContainerText>
        </TextUVInfo>
        <TextUVIndex>
          <ContainerText textColor={uvColor}>{uvIndex}%</ContainerText>
        </TextUVIndex>
        <TextUVInfo>
          <ContainerText textColor={uvColor}>
            Utilize protetor solar {`\n`}para se proteger
          </ContainerText>
        </TextUVInfo>
      </ContainerUVInfo>
    </ContainerUV>
  );
}
