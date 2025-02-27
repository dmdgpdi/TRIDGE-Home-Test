import { Outlet } from "react-router";
import { RouteBreadcrumb } from "../RouteBreadcrumb";
import { StaticBreadcrumb } from "../StaticBreadcrumb";

export function App() {
  return (
    <div>
      <h1>Home</h1>
      <StaticBreadcrumb />
      <h2>dynamic</h2>
      <RouteBreadcrumb />

      <h1>----------------------------------------</h1>
      <Outlet />
    </div>
  );
}
