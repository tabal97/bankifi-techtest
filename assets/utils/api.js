import axios from "axios";

const request = axios.create({ baseURL: "https://pokeapi.co/api/v2" });

export const getPokemonByName = async (name) => {
    const { data } = await request.get(`/pokemon/${name}`);
    return data;
}

export const getTypes = async () => {
    const { data } = await request.get("/type");
    return data
}

export const getPokemonsByType = async (url) => {
    const { data: { pokemon } } = await axios.get(url);
    return pokemon;
}