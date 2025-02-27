import { useQuery } from "@tanstack/react-query";
import type { components } from "../../schema";
import type { ConcreteType } from "../ConcreteType";
import { pokemonKeys } from "./pokemonKeys";

export function useFetchPokemonSpeciesInfo(id: string | number) {
  return useQuery({
    queryKey: pokemonKeys.species.detail(id),
    queryFn: async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`,
      );
      const data = (await response.json()) as ConcreteType<
        components["schemas"]["PokemonSpeciesDetail"]
      >;
      return data;
    },
    enabled: !!id,
  });
}
