import React, { Component } from "react";
import { StyleSheet, ImageBackground, View, Image, TouchableOpacity, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import axios from "axios";

class PokemonList extends Component {
    state = { pokemons: null }
    render() {
        const { pokemons } = this.state;
        console.log(pokemons)
        return (
            <ImageBackground source={require("../assets/pokemon-bg.jpg")} style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.scrollView}>
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
        axios.get(url).then(({ data: { pokemon } }) => this.setState({ pokemons: pokemon }))
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
    }
})

export default PokemonList;