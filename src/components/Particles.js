import React from 'react';
import Particles from 'react-tsparticles';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  particlesCanvas: {
    position: "fixed",
    opacity: "0.3"
  },
}));

const ParticlesComponent = () => {
  const classes = useStyles();

  return (
      <Particles
          className={classes.particlesCanvas}
          options={{
            particles: {
              number: {
                value: 45,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 1,
                  color: "tomato",
                },
              },
              size: {
                value: 8,
                random: true,
                animation: {
                  enable: false,
                  speed: 6,
                  minimumValue: 0,
                  sync: true,
                },
              },
              opacity: {
                value: 0.5,
                random: true,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.1,
                  sync: false,
                },
              },
            },
            // Add or modify additional options here
          }}
      />
  );
};

export default ParticlesComponent;