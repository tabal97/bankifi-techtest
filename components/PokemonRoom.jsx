import React, { Component } from 'react';
import { StyleSheet, ImageBackground, View, Image, TouchableOpacity, Text, FlatList } from "react-native";

class PokemonRoom extends Component {
    //id, name, height, weight, abilities, moves, sprite_url, stats, type
    state = { id: null, name: "", height: null, weight: null, abilities: [], moves: [], sprite_url: "", speed: 0, hp: 0, attack: 0, defense: 0, specAtk: 0, specDef: 0, types: [] }
    render() {
        const { id, name, height, weight, abilities, moves, sprite_url, speed, defense, attack, hp, specAtk, specDef, types } = this.state;
        return (<View>
            <Text>Name: {name} ID: {id}</Text>
            <Text>Height: {height}</Text>
            <Text>Weight: {weight}</Text>
            <Text>Abilities: {abilities}</Text>
            <Text>Moves: {moves}</Text>
            <Text>Stats:</Text>
            <Text>HP: {hp}</Text>
            <Text>ATK: {attack}</Text>
            <Text>DEF: {defense}</Text>
            <Text>Speed: {speed}</Text>
            <Text>Special-ATK: {specAtk}</Text>
            <Text>Special-DEF: {specDef}</Text>
            <Text>Type/Types: </Text>
            {types.map(type => {
                return <Text key={type}>{type}</Text>
            })}
        </View>);
    }

    componentDidMount = () => {
        const id = this.props.navigation.getParam("id");
        const pokemon = this.props.navigation.getParam("pokemon");
        const height = this.props.navigation.getParam("height");
        const weight = this.props.navigation.getParam("weight");
        const abilities = this.props.navigation.getParam("abilities");
        const moves = this.props.navigation.getParam("moves");
        const sprite_url = this.props.navigation.getParam("sprite_url");
        const speed = this.props.navigation.getParam("speed");
        const attack = this.props.navigation.getParam("attack");
        const defense = this.props.navigation.getParam("defense");
        const hp = this.props.navigation.getParam("hp");
        const specAtk = this.props.navigation.getParam("specAtk");
        const specDef = this.props.navigation.getParam("specDef");
        const types = this.props.navigation.getParam("types");

        this.setState({ id, name: pokemon, height, weight, abilities, moves, sprite_url, speed, attack, defense, hp, specAtk, specDef, types })
        // console.log(pokemon, id, height, weight, abilities, moves, sprite_url, stats, types)
        // console.log(stats)
    }
}

export default PokemonRoom;