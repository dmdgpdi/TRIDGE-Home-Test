import { globalStyle, style } from "@vanilla-extract/css";
import { desktop, tablet } from "./mediaQuery.css";

export const breadcrumbListStyle = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "1.5px",
  fontSize: "0.875rem",
  wordBreak: "break-word",
  "@media": {
    [`${tablet}, ${desktop}`]: {
      gap: "2.5px",
    },
  },
});

export const breadcrumbItemStyle = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "1.5px",
});

export const breadcrumbLinkStyle = style({
  transition: "colors",
  ":hover": {},
});

export const breadcrumbPageStyle = style({
  fontWeight: "normal",
});

export const breadcrumbSeparatorStyle = style({
  width: "0.875rem",
  height: "0.875rem",
});

globalStyle(`${breadcrumbSeparatorStyle} > svg`, {
  width: "0.875rem",
  height: "0.875rem",
});

export const breadcrumbEllipsisStyle = style({
  display: "flex",
  width: "1.5rem",
  height: "1.5rem",
  alignItems: "center",
  justifyContent: "center",
});

export const iconSizeStyle = style({
  width: "1rem",
  height: "1rem",
});

export const srOnlyStyle = style({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
});
