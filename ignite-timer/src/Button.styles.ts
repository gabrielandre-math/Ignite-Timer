/* eslint-disable no-unexpected-multiline */
import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';
interface ButtonContaninerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}
export const ButtonContainer = styled.button<ButtonContaninerProps>`
  width: 100px;
  height: 40px;

  background-color: ${props => props.theme['green-500']}

/*
  ${[props => {
    return css
      `background-color:${buttonVariants[props.variant]}`
  }]}
  */    
`;