import { style } from "@vanilla-extract/css";
import { desktop, mobile, tablet } from "./mediaQuery.css";

export const hiddenOnMobileStyle = style({
  "@media": {
    [mobile]: { display: "none" },
  },
});

export const visibleOnMobileStyle = style({
  "@media": {
    [`${tablet},${desktop}`]: { display: "none" },
  },
});
