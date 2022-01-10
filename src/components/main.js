import React from 'react'
import styled from 'styled-components'
import PowerButton from '../subComponents/powerButton'

const MainContainer = styled.div`
  position: relative;
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

h2,h3,h4,h5,h6{
  font-family: 'Karla', sans-serif;
  font-weight: 500;
}
`
const Container = styled.div`
  padding: 2rem;
`

const main = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton></PowerButton>
      </Container>
    </MainContainer>
  )
}

export default main
