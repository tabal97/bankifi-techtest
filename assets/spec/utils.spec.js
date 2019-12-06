import { formatPokemonData } from "../utils/dataFormatter";
import * as api from "../utils/api"

describe('Util function testing', () => {
    it('formatPokemonData method returns an object in the correct format when it is passed data', () => {
        const pokemonName = "pikachu"
        api.getPokemonByName(pokemonName).then(data => formatPokemonData(data)).catch(err => err)
            .then(data => {
                const keys = Object.keys(data)
                expect(typeof data).toBe("object");
                expect(keys).toEqual(["id", "pokemon", "height", "weight", "abilities", "front_male", "back_male", "speed", "attack", "defense", "hp", "specAtk", "specDef", "types"])
                expect(data.id).toBe(25);
                expect(data.pokemon).toBe("pikachu");
                expect(data.height).toBe(4);
                expect(data.weight).toBe(60);
                expect(data.abilities).toEqual(["lightning-rod", "static"]);
                expect(data.front_male).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");
                expect(data.back_male).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png");
                expect(data.speed).toBe(90);
                expect(data.attack).toBe(55);
                expect(data.hp).toBe(35);
                expect(data.defense).toBe(40);
                expect(data.specAtk).toBe(50);
                expect(data.specDef).toBe(50);
            })
    });
});