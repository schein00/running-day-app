import React from 'react';

import { Container, TextStyled } from './styles';

export default function Header(props) {
  const texto = props.text;
  const color = props.color;
  return (
    <Container>
      <TextStyled textColor={color}>{texto}</TextStyled>
    </Container>
  );
}
