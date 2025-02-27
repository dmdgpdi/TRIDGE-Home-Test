import type { JSX } from "react";
import { Home } from "./pages/Home";
import { PokemonDetailPage } from "./pages/PokemonDetailPage";
import { PokemonOverviewPage } from "./pages/PokemonOverviewPage";
import { PokemonSpeciesListPage } from "./pages/PokemonSpeciesListPage";
import { PokemonVarietiesListPage } from "./pages/PokemonVarietiesListPage";

export interface RouteBase {
  path: string;
  name: string | ((param: string) => string);
  useExternalName?: boolean;
}

export interface RouteType<T extends RouteBase = RouteBase> extends RouteBase {
  childRoutes?: T[];
}

type ExtractRoutePaths<T extends readonly RouteType[]> = T extends readonly [
  infer First,
  ...infer Rest extends readonly RouteType[],
]
  ? First extends RouteType
    ?
        | First["path"]
        | (First["childRoutes"] extends readonly RouteType[]
            ? ExtractRoutePaths<First["childRoutes"]>
            : never)
        | ExtractRoutePaths<Rest>
    : never
  : never;

export type RoutePaths = ExtractRoutePaths<typeof ROUTES>;

export interface ReactRouterType extends RouteType<ReactRouterType> {
  nested: boolean;
  element: () => JSX.Element;
}

export const ROUTES = [
  {
    path: "/",
    name: "Home",
    nested: false,
    element: Home,
    childRoutes: [
      {
        path: "species",
        name: "Pokemon Species List",
        element: PokemonSpeciesListPage,
        nested: false,
        childRoutes: [
          {
            path: ":species",
            name: (param: string) => `${param} Overview`,
            useExternalName: true,
            nested: false,
            element: PokemonOverviewPage,
            childRoutes: [
              {
                path: "pokemons",
                name: "Pokemon Varieties List",
                nested: false,
                element: PokemonVarietiesListPage,
                childRoutes: [
                  {
                    path: ":pokemon",
                    name: (param: string) => param,
                    useExternalName: true,
                    nested: false,
                    element: PokemonDetailPage,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
] as const satisfies readonly ReactRouterType[];
