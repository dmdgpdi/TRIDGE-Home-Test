import { useQuery } from "@tanstack/react-query";
import type { components } from "../../schema";
import type { ConcreteType } from "../ConcreteType";
import { pokemonKeys } from "./pokemonKeys";

export function useFetchPokemonInfo(id: string | number) {
  return useQuery({
    queryKey: pokemonKeys.detail(id),
    queryFn: async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = (await response.json()) as ConcreteType<
        components["schemas"]["PokemonDetail"]
      >;
      return data;
    },
  });
}
