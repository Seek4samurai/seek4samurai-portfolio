import React from 'react'
import styled from 'styled-components'
import { useEffect, useRef } from 'react'
import { Cloud, Rocket } from '../data/AllSvgs'

const Container = styled.div`
  position: relative;
`
const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);
  transform: rotate(90deg);
  color: ${props => props.theme.text};

  .Cloud{
    transform: rotate(135deg);
  }
`

const PreDisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
  color: ${props => props.theme.text};
`

const RocketComponent = (props) => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {

    const handleScroll = () => {

      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));

      let diffP = (diff * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-diffP}%)`;

      if (window.pageYOffset > 2) {
        hiddenRef.current.style.display = 'none';
      } else {
        hiddenRef.current.style.display = 'block'
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className='hidden'>
        <Rocket width={60} height={60} fill='#ffffff'></Rocket>
      </PreDisplay>
      <Slider ref={ref}>
        {
          [...Array(props.numbers)].map((x, id) => {
            return <Cloud key={id} width={25} height={25} fill='currentColor' className="Cloud">
            </Cloud>
          })
        }
        <Rocket width={60} height={60} fill='currentColor'></Rocket>
      </Slider>
    </Container>
  )
}

export default RocketComponent
