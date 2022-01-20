import React from 'react'
import styled from 'styled-components'

const Text = styled.h1`
  position: fixed;

  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};

  color: ${props => props.theme.text};
  font-size: calc(5rem + 5vw);

  filter: opacity(0.5);

  z-index: 4;
`

const BackText = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  )
}

export default BackText
