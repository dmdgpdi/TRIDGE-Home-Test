import { RouteBreadcrumb } from "../RouteBreadcrumb";
import { StaticBreadcrumb } from "../StaticBreadcrumb";

export function PokemonDescriptionPage() {
  return (
    <div>
      <h1>PokemonDescriptionPage</h1>
      <StaticBreadcrumb />
      <h2>dynamic</h2>
      <RouteBreadcrumb />
    </div>
  );
}
