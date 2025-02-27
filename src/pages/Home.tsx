import { NavLink } from "react-router";
import { RouteBreadcrumb } from "../RouteBreadcrumb";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <RouteBreadcrumb />
      <NavLink to={"/species"}>go to species</NavLink>
    </div>
  );
}
