import { useQuery } from "@apollo/client"
import Pokemon from "@/components/Pokemon"
import { GET_POKEMONS } from "@/graphql/get-pokemon";
import { PokemonI } from "@/types";


export default function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery<{
    pokemons: PokemonI[]
  }>(GET_POKEMONS, {
    variables: { first: 9 }
  });

  return (
    <div className="grid max-[995px]:grid-cols-1 gap-4 max-[1442px]:grid-cols-2 min-[1442px]:grid-cols-3 mx-auto max-w-[1440px] p-4">
      {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
    </div>
  )
}