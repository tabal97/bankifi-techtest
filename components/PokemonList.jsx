import React, { Component } from "react";
import { StyleSheet, ImageBackground, TouchableOpacity, Text, SafeAreaView, ScrollView } from "react-native";
import * as api from "../assets/utils/api";
import * as utils from "../assets/utils/dataFormatter"

class PokemonList extends Component {
    state = { pokemons: null, error: false }
    render() {
        const { pokemons, error } = this.state;
        return (
            <ImageBackground source={require("../assets/pokemon-bg.jpg")} style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>
                        {error && <Text style={styles.errorMsg}>There seems to be an issue with the servers. Please try again later</Text>}
                        {pokemons && pokemons.map(({ pokemon }) => {
                            return <TouchableOpacity onPress={() => this.handlePress(pokemon.name)} key={pokemon.name}><Text style={styles.button}>{pokemon.name}</Text></TouchableOpacity>
                        })}
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        );
    }
    componentDidMount() {
        const url = this.props.navigation.getParam("url");
        api.getPokemonsByType(url).then(pokemon => this.setState({ pokemons: pokemon, error: false })).catch(err => this.handleError(err))
    }
    handlePress = (name) => {
        api.getPokemonByName(name).then(data => { this.handleSuccess(data) }).catch(err => this.handleError(err))
    }
    handleError = err => {
        return this.setState({ error: true })
    }
    handleSuccess = data => {
        this.setState({ error: false });
        const formattedData = utils.formatPokemonData(data);
        return this.props.navigation.navigate("PokemonCard", formattedData)
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