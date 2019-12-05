import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, Image, TouchableOpacity, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import axios from "axios";

class PokemonList extends Component {
    state = { pokemons: null, error: false }
    render() {
        const { pokemons, error } = this.state;
        console.log(pokemons)
        return (
            <ImageBackground source={require("../assets/pokemon-bg.jpg")} style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                        {error && <Text style={styles.errorMsg}>There seems to be an issue with the servers. Please try again later</Text>}
                        {pokemons && pokemons.map(({ pokemon }) => {
                            return <TouchableOpacity onPress={() => this.handlePress(pokemon.url)} key={pokemon.name}><Text style={styles.button}>{pokemon.name}</Text></TouchableOpacity>
                        })}
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        );
    }
    componentDidMount() {
        const url = this.props.navigation.getParam("url");
        axios.get(url).then(({ data: { pokemon } }) => this.setState({ pokemons: pokemon, error: false })).catch(err => this.handleError(err))
    }
    handlePress = (url) => {
        axios.get(url).then(({ data }) => { this.handleSuccess(data) }).catch(err => this.handleError(err))
    }
    handleError = err => {
        return this.setState({ error: true })
    }
    handleSuccess = data => {
        this.setState({ error: false })
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
        return this.props.navigation.navigate("PokemonCard", { id, pokemon, height, weight, abilities, front_male, back_male, speed, attack, defense, hp, specAtk, specDef, types })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        fontSize: 30,
        backgroundColor: "whitesmoke",
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 75,
        borderRadius: 10,
        borderWidth: 3,
        overflow: "hidden",
        padding: 30,
        paddingHorizontal: 100
    },
    errorMsg: {
        color: "white",
        backgroundColor: "red",
        borderRadius: 3,
        padding: 1,
        overflow: "hidden",
        marginBottom: 5
    }
})

export default PokemonList;