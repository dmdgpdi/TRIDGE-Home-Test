import type { JSX } from "react";
import { App } from "./pages/App";
import { PokemonDescriptionPage } from "./pages/PokemonDescriptionPage";
import { PokemonOverviewListPage } from "./pages/PokemonOverviewListPage";
import { PokemonOverviewPage } from "./pages/PokemonOverviewPage";
import { PokemonSpeciesListPage } from "./pages/PokemonSpeciesListPage";

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
  isIndex?: boolean;
}

export const ROUTES = [
  {
    path: "/",
    name: "Home",
    nested: false,
    isIndex: true,
    element: App,
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
            nested: true,
            element: PokemonOverviewPage,
            childRoutes: [
              {
                path: "pokemons",
                name: "Pokemon List",
                nested: false,
                element: PokemonOverviewListPage,
                childRoutes: [
                  {
                    path: ":pokemon",
                    name: (param: string) => param,
                    useExternalName: true,
                    nested: false,
                    element: PokemonDescriptionPage,
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
