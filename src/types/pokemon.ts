export interface IPokemonAbility {
    is_hidden: boolean;
    slot: number;
    ability: string;
}

export interface IPokemonMove {
    move: string;
    version_group_details: IPokemonMoveVersion[];
}

export interface IPokemonMoveVersion {
    move_learn_method: string;
    version_group: string;
    level_learned_at: number;
}

export interface IPokemonSprites {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
    back_default: string;
    back_shiny: string;
    back_female: string;
    back_shiny_female: string;
}

export interface IPokemonStat {
    stat: string;
    effort: number;
    base_stat: number
}

export interface IPokemonType {
    slot: number;
    type: string;
}

export default interface IPokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: IPokemonAbility[];
    forms: string[];
    moves: IPokemonMove[];
    sprites: IPokemonSprites;
    species: string;
    stats: IPokemonStat[];
    types: IPokemonType[];
}