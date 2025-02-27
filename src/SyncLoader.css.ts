import { keyframes, style } from "@vanilla-extract/css";

export const bounceDistanceVar = "--bounce-distance";

const bounce = keyframes({
  "33%": { transform: `translateY(var(${bounceDistanceVar}, 10px))` },
  "66%": {
    transform: `translateY(calc(-1 * var(${bounceDistanceVar}, 10px)))`,
  },
  "100%": { transform: "translateY(0)" },
});

export const loaderStyle = style({
  display: "inline-block",
});

export const dotStyle = style({
  display: "inline-block",
  margin: "0 2px",
  animation: `${bounce} 0.6s infinite ease-in-out`,
  animationFillMode: "both",
  selectors: {
    "&:nth-child(2)": { animationDelay: "0.07s" },
    "&:nth-child(3)": { animationDelay: "0.14s" },
  },
});
