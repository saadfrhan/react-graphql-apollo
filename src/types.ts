// Pokemon

export interface PokemonI {
  id: string;
  name: string;
  image: string;
  maxHP: number;
  maxCP: number;
  attacks: {
    special: {
      name: string;
      damage: number;
    }[];
  };
}