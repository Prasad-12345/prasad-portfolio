export const particlesConfig = {
  background: {
    color: { value: "#1d1d1d" },
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 50,
      density: { enable: true, area: 800 },
    },
    color: { value: "#1d1d1d" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: { min: 1, max: 5 } },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outModes: {
        default: "bounce",
      },
    },
  },
  detectRetina: true,
};
