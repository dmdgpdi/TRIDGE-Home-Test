import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "flex",
  gap: "16px",
  flexDirection: "column",
  alignItems: "center",
  padding: "32px",
});

export const titleStyle = style({
  marginBottom: "16px",
  fontSize: "32px",
  fontWeight: "bold",
});

export const linkButtonStyle = style({
  display: "inline-block",
  borderRadius: "4px",
  padding: "12px 24px",
  backgroundColor: "#007bff",
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "bold",
  letterSpacing: "0.5px",
  transition: "background-color 0.3s ease",

  ":hover": {
    backgroundColor: "#0056b3",
  },
});
