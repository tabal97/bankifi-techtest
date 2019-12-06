import * as api from "../utils/api";

describe('API Testing', () => {
    it('GET: pokemonByName method returns with an object when it is passed a valid name', () => {
        const pokemon = "pikachu"
        api.getPokemonByName(pokemon).catch(err => err)
            .then(expectedValue => {
                expect(typeof expectedValue).toBe("object")
            })
    });
    it('GET: pokemonByName method returns with an object with the correct keys', () => {
        const pokemon = "pikachu"
        api.getPokemonByName(pokemon).catch(err => err)
            .then(expectedValue => {
                const keys = Object.keys(expectedValue)
                expect(keys).toEqual(["abilities", "base_experience", "forms", "game_indices", "height", "held_items", "id", "is_default", "location_area_encounters", "moves", "name", "order", "species", "sprites", "stats", "types", "weight"])
            })
    });
    it('GET: getTypes method returns with an object', () => {
        api.getTypes().catch(err => err)
            .then(expectedValue => {
                expect(typeof expectedValue).toBe("object")
            })
    });
    it('GET: getTypes method returns an object containing 20 objects', () => {
        api.getTypes().catch(err => err)
            .then(({ results }) => {
                const keys = Object.keys(results)
                expect(keys).toEqual(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"])
            })
    });
    it('GET: getPokemonsByType method returns an object when passed a valid url', () => {
        const url = "https://pokeapi.co/api/v2/type/3/";
        api.getPokemonsByType(url).catch(err => err)
            .then(expectedValue => {
                expect(typeof expectedValue).toBe("object")
            })
    });
    it('GET: getPokemonsByType method returns an object with 125 pokemon', () => {
        const url = "https://pokeapi.co/api/v2/type/3/";
        api.getPokemonsByType(url).catch(err => err)
            .then(expectedValue => {
                const keys = Object.keys(expectedValue)
                expect(keys.length).toBe(125)
            })
    });
});