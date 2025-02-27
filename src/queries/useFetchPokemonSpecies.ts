import { useQuery } from "@tanstack/react-query";
import type { components } from "../../schema";
import type { ConcreteType } from "../ConcreteType";
import { pokemonKeys } from "./pokemonKeys";

export function useFetchPokemonSpecies() {
  return useQuery({
    queryKey: pokemonKeys.species.list(),
    queryFn: async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon-species");
      const data = (await response.json()) as ConcreteType<
        components["schemas"]["PaginatedPokemonSpeciesSummaryList"]
      >;
      return data;
    },
    staleTime: 1000 * 60 * 5,
  });
}
