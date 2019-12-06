export const formatPokemonData = (data) => {
    const { id, height, weight, name: pokemon } = data;
    const abilities = data.abilities.map(({ ability }) => {
        return ability.name
    });
    const front_male = data.sprites.front_default;
    const back_male = data.sprites.back_default;
    const stats = data.stats.reduce((total, currObj) => {
        total[currObj.stat.name] = currObj.base_stat;
        return total
    }, {})
    const types = data.types.map(({ type }) => {
        return type.name;
    })
    const { speed, attack, defense, hp } = stats;
    const specAtk = stats[`special-attack`];
    const specDef = stats[`special-defense`];
    return { id, pokemon, height, weight, abilities, front_male, back_male, speed, attack, defense, hp, specAtk, specDef, types }
}