import { NavLink } from "react-router";
import { RouteBreadcrumb } from "../RouteBreadcrumb";
import { containerStyle, linkButtonStyle, titleStyle } from "./page.css";

export function Home() {
  return (
    <div className={containerStyle}>
      <h1 className={titleStyle}>Home</h1>
      <RouteBreadcrumb />
      <hr />
      <NavLink to={"/species"} className={linkButtonStyle}>
        go to species
      </NavLink>
    </div>
  );
}
