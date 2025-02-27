export interface RouteType {
  path: string;
  name: string | ((param: string) => string);
  useExternalName?: boolean;
  childRoutes?: RouteType[];
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

export const ROUTES = [
  {
    path: "/",
    name: "Home",
    childRoutes: [
      {
        path: "species",
        name: "Pokemon Species List",
        childRoutes: [
          {
            path: ":species",
            name: (param: string) => `${param} Overview`,
            useExternalName: true,
            childRoutes: [
              {
                path: "pokemons",
                name: "Pokemon List",
                childRoutes: [
                  {
                    path: ":pokemon",
                    name: (param: string) => param,
                    useExternalName: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
] as const satisfies readonly RouteType[];
