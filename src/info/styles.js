import styled from 'styled-components/native';

export const ContainerText = styled.Text`
  ${(props) => {
    if (props.textColor === 'blue') {
      return `color: #345Aaa`;
    } else if (props.textColor === 'weakBlue') {
      return `color: #60BEF3`;
    } else if (props.textColor === 'orange') {
      return `color: #F14D06`;
    } else if (props.textColor === 'yellow') {
      return `color: #FC9D0F`;
    } else if (props.textColor === 'green') {
      return `color: #9BAF6E`;
    }
  }};
  margin: 10px;
`;

export const Container = styled.View`
  width: 92%;
  margin-left: 12px;
`;

export const ContainerTemperature = styled.View`
  margin-top: 12px;
  height: 130px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerHumidity = styled.View`
  margin-top: 6px;

  height: 100px;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerWindRain = styled.View`
  margin-top: 6px;

  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerTemperatureText = styled.Text`
  font-family: Rounded Mplus;
  font-style: normal;
  font-weight: normal;
  font-size: 100px;
  line-height: 215px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const ContainerClima = styled.View`
  align-items: center;
`;

export const ContainerWind = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: -12px;
  margin-bottom: -12px;
`;

export const ContainerRain = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: -12px;
  margin-bottom: -12px;
`;

export const TextClima = styled.Text`
  font-family: Rounded Mplus;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const TextWind = styled.Text`
  font-family: Rounded Mplus;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 59px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 12px;
`;

export const TextRainyLabel = styled.Text`
  font-family: Rounded Mplus;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const TextRainy = styled.Text`
  font-family: Rounded Mplus;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 59px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 12px;
`;

export const TextHumidityLabel = styled.Text`
  font-family: Rounded Mplus;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 39px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const TextHumidity = styled.Text`
  font-family: Rounded Mplus;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 59px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-left: 12px;
`;

export const ContainerHumidityInfo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: -12px;
  margin-bottom: -12px;
`;

export const ContainerUV = styled.View`
  margin-top: 12px;
  height: 130px;
  flex-direction: row;
`;

export const ContainerUVIcon = styled.View`
  margin: 15px;
`;

export const ContainerUVInfo = styled.View`
  margin-top: 12px;
  align-items: center;
  justify-content: center;
`;

export const TextUVInfo = styled.Text`
  font-family: Rounded Mplus;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  display: flex;
  align-items: center;
  text-align: center;
`;
export const TextUVIndex = styled.Text`
  font-family: Rounded Mplus;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  display: flex;
  align-items: center;
  text-align: center;
`;
