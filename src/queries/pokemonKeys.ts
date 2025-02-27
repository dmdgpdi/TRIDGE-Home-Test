export const pokemonKeys = {
  all: ["pokemon"] as const,
  species: {
    all: () => [...pokemonKeys.all, "species"] as const,
    list: () => [...pokemonKeys.species.all(), "list"] as const,
    detail: (id: string | number) =>
      [...pokemonKeys.species.all(), "detail", id] as const,
  },
  detail: (id: string | number) => [pokemonKeys.all, "detail", id],
};
