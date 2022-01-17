import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

const Box = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right:0;
  left: 0;
  z-index: 0;
`

const ParticleComponentMain = (props) => {
  return (
    <Box>
      {/* <Particles style={{ position: 'absolute', top: 0 }} params={props.theme === "light" ? configLight : configDark} >
      </Particles> */}
      <Particles
        params={
          {
            background: {
              color: {
                value: "#f1f2f6"
              },
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover"
            },
            fullScreen: {
              zIndex: 1
            },
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push"
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                  parallax: {
                    enable: true,
                    force: 60
                  }
                }
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40
                },
                grab: {
                  distance: 400
                }
              }
            },
            particles: {
              color: {
                value: "#57606f"
              },
              links: {
                color: {
                  value: "#57606f"
                },
                distance: 150,
                enable: true,
                opacity: 0.4
              },
              move: {
                attract: {
                  rotate: {
                    x: 600,
                    y: 1200
                  }
                },
                enable: true,
                outModes: {
                  bottom: "out",
                  left: "out",
                  right: "out",
                  top: "out"
                }
              },
              number: {
                density: {
                  enable: true,
                  area: 400,
                  factor: 1000
                }
              },
              opacity: {
                random: {
                  enable: true
                },
                value: {
                  min: 0.1,
                  max: 0.5
                },
                animation: {
                  enable: true,
                  speed: 3,
                  minimumValue: 0.1
                }
              },
              size: {
                random: {
                  enable: true
                },
                value: {
                  min: 0.1,
                  max: 10
                },
                animation: {
                  enable: true,
                  speed: 20,
                  minimumValue: 0.1
                }
              }
            }
          }
        } />
    </Box>
  )
}

export default ParticleComponentMain
