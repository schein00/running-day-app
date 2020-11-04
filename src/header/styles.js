import styled from 'styled-components/native';

export const Container = styled.View`
  height: 75px;
  width: 95%;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;
export const TextStyled = styled.Text`
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
  position: absolute;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 75px;
  display: flex;
  align-items: center;
  text-align: center;
`;
