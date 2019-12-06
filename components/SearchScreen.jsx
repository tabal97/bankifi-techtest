import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Text, TextInput, KeyboardAvoidingView } from "react-native";
import * as api from "../assets/utils/api";
import * as utils from "../assets/utils/dataFormatter"
import { withNavigation } from "react-navigation";



class SearchScreen extends Component {
    state = { pokemon: "", error: false, fakePokemon: "" }
    render() {
        const { pokemon, error, fakePokemon } = this.state;
        return (
            <ImageBackground source={require("../assets/SearchScreen-bg.jpg")} style={styles.container}>
                <KeyboardAvoidingView style={styles.container} behavior="padding">
                    <Image source={require("../assets/pokemon-search.png")} style={styles.header} />
                    <TextInput placeholder="Pokémon Name or ID"
                        style={error ? styles.inputBoxWrong : styles.inputBox}
                        onChangeText={this.handlePokemonChange}
                        value={pokemon}
                        autoCorrect={false} />
                    {error && <Text style={styles.errorMsg}>Are you sure "{fakePokemon}" is a real Pokémon?</Text>}
                    <TouchableOpacity onPress={this.handleSearch} disabled={!pokemon}><Text style={styles.button}>Search!</Text></TouchableOpacity>
                </KeyboardAvoidingView></ImageBackground>);
    }

    handlePokemonChange = e => {
        this.setState({ pokemon: e })
    }
    handleSearch = e => {
        const { pokemon } = this.state;
        const formattedPokemon = pokemon.toLowerCase()
        api.getPokemonByName(formattedPokemon).then(data => { this.handleSuccess(data) }).catch(err => this.handleError(err))
    }
    handleError = err => {
        const { pokemon } = this.state;
        return this.setState({ error: true, fakePokemon: pokemon })
    }
    handleSuccess = data => {
        this.setState({ pokemon: "", error: false });
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
    header: {
        width: 350,
        height: 350,
        resizeMode: 'contain'
    },
    errorMsg: {
        color: "white",
        backgroundColor: "red",
        borderRadius: 3,
        padding: 1,
        overflow: "hidden",
        marginBottom: 5
    },
    inputBox: {
        height: 100,
        width: 300,
        padding: 3,
        margin: 3,
        borderRadius: 20,
        marginBottom: 50,
        textAlign: "center",
        fontSize: 30,
        borderWidth: 3,
        backgroundColor: "whitesmoke"
    },
    inputBoxWrong: {
        height: 100,
        width: 300,
        padding: 3,
        margin: 3,
        borderRadius: 20,
        marginBottom: 50,
        textAlign: "center",
        fontSize: 30,
        borderWidth: 3,
        borderColor: "red",
        backgroundColor: "whitesmoke"
    },
    button: {
        fontSize: 30,
        backgroundColor: "whitesmoke",
        opacity: 0.8,
        marginBottom: 150,
        borderRadius: 10,
        overflow: "hidden",
        padding: 10
    }
});

export default withNavigation(SearchScreen);