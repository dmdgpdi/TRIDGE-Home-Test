import { style } from "@vanilla-extract/css";
import { desktop, mobile, tablet } from "./mediaQuery.css";

export const hiddenOnMobileStyle = style({
  "@media": {
    [mobile]: { display: "none" },
  },
});

export const visibleOnMobileStyle = style({
  "@media": {
    [`${tablet}, ${desktop}`]: { display: "none" },
  },
});

export const breadcrumbLinkStyle = style({
  textDecoration: "none",
  color: "#555",
  fontWeight: "500",
  transition: "color 0.2s ease-in-out",

  ":hover": {
    color: "#007bff",
    textDecoration: "underline",
  },

  ":focus": {
    outline: "2px solid #007bff",
    borderRadius: "4px",
  },
});

export const breadcrumbPageStyle = style({
  fontWeight: "bold",
  color: "#333",
  textDecoration: "none",
});

export const breadcrumbSeparatorStyle = style({
  margin: "0 8px",
  color: "#999",
  fontSize: "1rem",
});

export const breadcrumbEllipsisStyle = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1.5rem",
  height: "1.5rem",
  color: "#666",
});
