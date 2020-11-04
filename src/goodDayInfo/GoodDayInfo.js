import React from 'react';
import { View, Text } from 'react-native';

import {
  Container,
  ContainerNot,
  ContainerGood,
  TextContainer,
} from './styles';

export default function GoodDayInfo(props) {
  const goodDay = props.goodDay;

  console.log('good day 111 ' + goodDay);

  if (goodDay) {
    return (
      <Container>
        <ContainerGood>
          <TextContainer>É um otimo dia para correr</TextContainer>
        </ContainerGood>
      </Container>
    );
  } else {
    return (
      <Container>
        <ContainerNot>
          <TextContainer>Não é um bom dia para correr</TextContainer>
        </ContainerNot>
      </Container>
    );
  }
}
