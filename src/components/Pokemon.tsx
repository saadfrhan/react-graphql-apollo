import { PokemonI } from "@/types";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

export default function Pokemon({
  pokemon
}: {
  pokemon: PokemonI;
}) {
  return (
    <Card className="w-full mx-auto shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="mb-4 text-center">
        <p className="text-xl font-bold">{pokemon.name}</p>
      </CardHeader>

      <CardContent>
        <div className="flex justify-between mb-4 text-sm">
          <span>Max HP: {pokemon.maxHP}</span>
          <span>Max CP: {pokemon.maxCP}</span>
        </div>

        <div className="mb-4 flex justify-center items-center">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-auto h-96 object-cover"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {pokemon.attacks.special.slice(0, 3).map(attack => (
            <Badge key={`${attack.name}-${attack.damage}`}>
              {attack.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
